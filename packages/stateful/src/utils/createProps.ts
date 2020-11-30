import cx from "classnames";
import { StatefulConfig, StatusResolver } from "../types";
import { AllStatuses, Status } from "../Status";
import asArray from "./asArray";
import { useStateful } from "../hooks";
import createCallbacks from "./createCallbacks";

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

function withoutStatusClasses(className: string = "") {
  if (status === Status.IDLE) {
    return className;
  }
  // remove any pre-existing classes that exactly match our generated status classes
  return AllStatuses.reduce((result, current) => result.replace(current, ""), className).trim();
}
export function createProps(args: {
  status: Status;
  child?: React.ReactElement<any>;
  config: StatefulConfig;
  parentProps: any;
  handlers?: ReturnType<typeof useStateful>["handlers"];
  omitProps?: string[];
}) {
  const { status } = args;

  // all existing props we found for the wrapped child,
  // (either on it, or passed down from our parent)
  const childProps = Object.assign(
    {},
    args.child ? (args.child as React.ReactElement<any>).props : {},
    args.parentProps
  );

  // the props we generate based on status and attach to the wrapped child
  const additionalProps = {
    className: cx(
      withoutStatusClasses(childProps.className),
      createStatusClasses({ status, config: args.config, childProps })
    ),
    ...createStatusProps({ status, config: args.config, childProps }),
  };

  // the props that we want to pass along. everything we don't know and use.
  const { delimiter } = args.config;
  const knownKeys = [
    "children",
    ...asArray({ value: args.config.monitor, childProps, status, delimiter }),
    ...asArray({ value: args.config.confirm, childProps, status, delimiter }),
    ...(args.omitProps || []),
  ];
  const otherProps = omitProps(childProps, knownKeys);

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
    additionalProps,
    otherProps,
    callbacks,
  };
}

// internal functions

if (process.env.NODE_ENV === "test") {
  Object.assign(module.exports, {
    createStatusClasses,
    createStatusProps,
    generateProps,
  });
}

/**
 * Creates an object with boolean flags for the defined props and given `status`.
 * The object has a property and the value `true` for each propName
 * that was defined for the matching state.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} config The Stateful configuration
 */
function createStatusProps({
  status,
  config,
  childProps,
}: {
  status: Status;
  config: StatefulConfig;
  childProps: React.PropsWithChildren<any>;
}) {
  const valueMap = {
    [Status.IDLE]: undefined,
    [Status.PENDING]: config.pendingProps,
    [Status.BUSY]: [
      ...asArray({ value: config.pendingProps, status, delimiter: config.delimiter, childProps }),
      ...asArray({ value: config.busyProps, status, delimiter: config.delimiter, childProps }),
    ],
    [Status.SUCCESS]: config.successProps,
    [Status.ERROR]: config.errorProps,
    [Status.CONFIRM]: config.confirmProps,
  };

  return generateProps({ valueMap, status, delimiter: config.delimiter, childProps });
}

/**
 * Creates an object with boolean flags for the defined CSS classNames based on the given `status`.
 * The object has a property and the value `true` for each of the class
 * names provided for the current status.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} config The Stateful configuration
 */
function createStatusClasses({
  status,
  config,
  childProps,
}: {
  status: Status;
  config: StatefulConfig;
  childProps: React.PropsWithChildren<any>;
}) {
  const valueMap = {
    [Status.IDLE]: undefined,
    [Status.PENDING]: config.pendingClasses,
    [Status.BUSY]: [
      ...asArray({ value: config.pendingClasses, status, delimiter: config.delimiter, childProps }),
      ...asArray({ value: config.busyClasses, status, delimiter: config.delimiter, childProps }),
    ],
    [Status.SUCCESS]: config.successClasses,
    [Status.ERROR]: config.errorClasses,
    [Status.CONFIRM]: config.confirmClasses,
  };

  return generateProps({ valueMap, status, delimiter: config.delimiter, childProps: {} });
}

/**
 * Creates a props object given the current status and a mapping of status values to prop names, e.g. `{[Status.PENDING]: 'pending disabled'}`
 */
function generateProps({
  valueMap,
  status,
  delimiter,
  childProps,
}: {
  valueMap: Record<Status, any>;
  status: Status;
  delimiter?: string;
  childProps: React.PropsWithChildren<any>;
}) {
  const value = valueMap[status];
  if (typeof value === "function") {
    return value(status, childProps);
  } else if (typeof value === "string" || Array.isArray(value)) {
    const keys = asArray({ value, status, delimiter, childProps }) as any[];

    if (!keys) {
      return {};
    }

    return keys.reduce((result, current) => {
      if (typeof current === "function") {
        return {
          ...result,
          ...current(status, childProps),
        };
      }

      if (Object(current) === current) {
        return {
          ...result,
          ...current,
        };
      }

      const [currentKey, currentValue = true] = current.split(":");
      return {
        ...result,
        [currentKey]: currentValue,
      };
    }, {});
  }
  return {};
}
