import { StatefulProps } from "../types";
import { Status } from "../Status";
import asArray from "./asArray";

/**
 * Creates an object with boolean flags for the defined CSS classNames and given `status`.
 * The object has a property and the value `true` for each of the class
 * names provided for the current status.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} props The props of the Stateful instance
 */
export function createStatusClassFlags(status: Status, props: StatefulProps) {
  const flags = {
    [Status.PENDING]: props.pendingClasses,
    [Status.BUSY]: [...asArray(props.pendingClasses), ...asArray(props.busyClasses)],
    [Status.SUCCESS]: props.successClasses,
    [Status.ERROR]: props.errorClasses,
  };

  return createProps(flags, status, props.delimiter);
}

/**
 * Creates an object with boolean flags for the defined props and given `status`.
 * The object has a property and the value `true` for each propName
 * that was defined for the matching state.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} props The props of the Stateful instance
 */
export function createStatusProps(status: Status, props: StatefulProps) {
  const flags = {
    [Status.PENDING]: props.pendingProps,
    [Status.BUSY]: [...asArray(props.pendingProps), ...asArray(props.busyProps)],
    [Status.SUCCESS]: props.successProps,
    [Status.ERROR]: props.errorProps,
  };

  return createProps(flags, status, props.delimiter);
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
export function createProps(
  flagMap: any, //Record<Status, string | ((v: Status) => string)>,
  status: Status,
  delimiter?: string
) {
  const statusFlags = flagMap[status];
  if (typeof statusFlags === "function") {
    return statusFlags(status);
  } else if (Array.isArray(statusFlags) || typeof statusFlags === "string") {
    return createFlags(statusFlags, delimiter);
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
export function createFlags(key: string | string[], delimiter: string = " ", value = true) {
  const keys = asArray(key, delimiter);
  if (!keys) {
    return {};
  }
  return keys.reduce((result, propName) => {
    return {
      ...result,
      [propName]: value,
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

export function getStatusPropKeys(statuses: Status[], props: StatefulProps) {
  return getFlagKeys(statuses, props, createStatusProps);
}

export function getStatusClassNames(statuses: Status[], props: StatefulProps) {
  return getFlagKeys(statuses, props, createStatusClassFlags);
}

export function getFlagKeys(
  statuses: Status[],
  props: StatefulProps,
  createFlags: (status: Status, props: StatefulProps) => Record<string, any>
) {
  const ignoredValues = statuses.reduce((result, ignoredStatus) => {
    const values = createFlags(ignoredStatus, props);
    return result.concat(Object.keys(values));
  }, [] as string[]);

  return Array.from(new Set(ignoredValues));
}
