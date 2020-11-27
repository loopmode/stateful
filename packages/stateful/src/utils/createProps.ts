import cx from "classnames";
import { StatefulConfig, StatusResolver } from "../types";
import { AllStatuses, Status } from "../Status";
import asArray from "./asArray";
import { useStateful } from "../hooks";
import createCallbacks from "./createCallbacks";

/**
 * Creates an object with boolean flags for the defined CSS classNames and given `status`.
 * The object has a property and the value `true` for each of the class
 * names provided for the current status.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} config The Stateful configuration
 */
export function createStatusClassFlags(status: Status, config: StatefulConfig) {
  const flags = {
    [Status.IDLE]: undefined,
    [Status.PENDING]: config.pendingClasses,
    [Status.BUSY]: [
      ...asArray(config.pendingClasses, status, config.delimiter),
      ...asArray(config.busyClasses, status, config.delimiter),
    ],
    [Status.SUCCESS]: config.successClasses,
    [Status.ERROR]: config.errorClasses,
    [Status.CONFIRM]: config.confirmClasses,
  };

  return createStatusProps(flags, status, config.delimiter);
}

/**
 * Creates an object with boolean flags for the defined props and given `status`.
 * The object has a property and the value `true` for each propName
 * that was defined for the matching state.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} config The Stateful configuration
 */
export function createExtraProps(status: Status, config: StatefulConfig) {
  const flags = {
    [Status.IDLE]: undefined,
    [Status.PENDING]: config.pendingProps,
    [Status.BUSY]: [
      ...asArray(config.pendingProps, status, config.delimiter),
      ...asArray(config.busyProps, status, config.delimiter),
    ],
    [Status.SUCCESS]: config.successProps,
    [Status.ERROR]: config.errorProps,
    [Status.CONFIRM]: config.confirmProps,
  };

  return createStatusProps(flags, status, config.delimiter);
}

/**
 * Creates a props object given the current status and a mapping of status values to prop names.
 *
 * The `flagMap` object should define a mapping between status values and prop names.
 * Its keys should be `Status` values, while its values should be a `PolyType` list of prop names
 * or functions that return a props object themselves.
 *
 * @param {Object} flagMap A mapping of status values and prop names, e.g. `{[Status.PENDING]: 'pending disabled'}`. The value can also be afunction that receives the current status and returns prop names.
 * @param {Number} status The active `Status` value
 * @param {String} [delimiter] An optional delimiter by which to split `PolyType` strings
 * @return {Object} An object with props for the given `status`, e.g. `{pending: true, disabled: true}`
 */
export function createStatusProps(
  flagMap: Record<Status, any>,
  status: Status,
  delimiter?: string
) {
  const statusFlags = flagMap[status];
  if (typeof statusFlags === "function") {
    return statusFlags(status);
  } else if (Array.isArray(statusFlags) || typeof statusFlags === "string") {
    return createValues(statusFlags, status, delimiter);
  }
  return {};
}

/**
 * Takes one or more string keys and returns an object with boolean flags for each key.
 * If `key` contains multiple values, the returned object contains a property for each key.
 *
 * @param {String | String[]} key One or more names for properties in the returned object
 * @param {String} delimiter A string for splitting multi-value `key` strings into an array
 * @param {*} [value=true] The value to set for all properties
 * @returns {Object} An object with the specified properties. All properties have the same `value`
 */
export function createValues(
  key: string | string[],
  status: Status,
  delimiter: string = " ",
  defaultValue = true
) {
  const keys = asArray(key, status, delimiter) as any[];

  if (!keys) {
    return {};
  }

  return keys.reduce((result, current) => {
    if (typeof current === "function") {
      return {
        ...result,
        ...current(status),
      };
    }

    if (Object(current) === current) {
      return {
        ...result,
        ...current,
      };
    }

    const [currentKey, currentValue] = current.split(":");
    return {
      ...result,
      [currentKey]: currentValue || defaultValue,
    };
  }, {});
}

/**
 * Creates an object with only foreign properties.
 *
 * @param {*} childProps A child's props object
 * @param {String[]} omittedNames Names of props to exclude from the result
 * @return {*} The remaining props object
 */
export function omitProps(childProps: Record<string, unknown>, omittedNames: string[] = []) {
  return Object.keys(childProps).reduce((result, key) => {
    if (!omittedNames.includes(key)) {
      result[key] = childProps[key];
    }
    return result;
  }, {} as Record<string, unknown>);
}

export function pickProps(childProps: any, names: string[] = []) {
  return names.reduce((result, name) => {
    result[name] = childProps[name];
    return result;
  }, {} as any);
}

export function getStatusPropKeys(statuses: Status[], props: StatefulConfig) {
  return getKeys(statuses, props, createExtraProps);
}

export function getStatusClassNames(statuses: Status[], props: StatefulConfig) {
  return getKeys(statuses, props, createStatusClassFlags);
}

/**
 * Creates a flag map for the given status and returns only the keys of that map
 * @param statuses
 * @param props
 * @param createValues
 */
export function getKeys(
  statuses: Status[],
  props: StatefulConfig,
  createValues: (status: Status, props: StatefulConfig) => Record<string, any>
) {
  const ignoredValues = statuses.reduce((result, ignoredStatus) => {
    const values = createValues(ignoredStatus, props);
    return result.concat(Object.keys(values));
  }, [] as string[]);

  return Array.from(new Set(ignoredValues));
}

export function createChildProps(args: {
  status: Status;
  child?: React.ReactElement<any>;
  config: StatefulConfig;
  handlers?: ReturnType<typeof useStateful>["handlers"];
  omitProps?: string[];
}) {
  const { status } = args;

  // all existing props we found on the wrapped child
  const childProps = args.child ? (args.child as React.ReactElement<any>).props : {};

  let className = childProps.className || "";
  if (status !== Status.IDLE) {
    className = AllStatuses.reduce(
      (result, current) => result.replace(current, ""),
      className
    ).trim();
  }

  // the props we generate and attach to the wrapped child
  const extraProps = {
    className: cx(className, createStatusClassFlags(status, args.config)),
    ...createExtraProps(status, args.config),
  };

  // props of the child that we pass along because they are unknown to us
  const foreignProps = omitProps(childProps, [
    ...asArray(args.config.monitor, status, args.config.delimiter),
    ...asArray(args.config.confirm, status, args.config.delimiter),
    ...(args.omitProps || []),
  ]);

  // overridden callbacks for the wrapped child. these are the monitored functions
  const callbacks = args.handlers
    ? createCallbacks({
        childProps,
        monitor: args.config.monitor,
        confirm: args.config.confirm,
        handlers: args.handlers,
        delimiter: args.config.delimiter,
        promisesOnly: args.config.promisesOnly,
      })
    : {};

  return {
    extraProps,
    foreignProps,
    callbacks,
  };
}
