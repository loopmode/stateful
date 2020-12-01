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

export function createProps(args: {
  status: Status;
  child?: React.ReactElement<any>;
  config: StatefulConfig;
  parentProps: Record<string, unknown>;
  handlers?: ReturnType<typeof useStateful>["handlers"];
  ownPropNames: string[];
}) {
  const { status, config, ownPropNames } = args;

  // all existing props we found for the wrapped child,
  // (either on it, or passed down from our parent)
  const childProps = Object.assign(
    {},
    args.child ? (args.child as React.ReactElement<any>).props : {},
    args.parentProps
  );

  // the props we generate based on status and attach to the wrapped child
  const additionalProps = {
    className: getClassName({ config, status, childProps }),
    ...getStatusProps({ status, config, childProps }),
  };

  // unknown props that we want to pass along
  const otherProps = getUnknownProps({ childProps, status, config, ownPropNames });

  // overridden callbacks for the wrapped child. these are the monitored functions
  const callbacks = args.handlers
    ? createCallbacks({
        childProps,
        monitor: config.monitor,
        confirm: config.confirm,
        handlers: args.handlers,
        delimiter: config.delimiter,
        promisesOnly: config.promisesOnly,
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
    getStatusClasses,
    getStatusProps,
    resolveProps,
  });
}

/**
 * Creates a props object with values for the current status.
 */
function getStatusProps(args: {
  status: Status;
  config: StatefulConfig;
  childProps: React.PropsWithChildren<any>;
}): Record<string, unknown> {
  const { status, config, childProps } = args;

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

  return resolveProps({ valueMap, status, delimiter: config.delimiter, childProps });
}

/**
 * Creates a props object with boolean flags for the defined CSS classNames based on the given `status`.
 * The object has a property and the value `true` for each of the class
 * names provided for the current status.
 */
function getStatusClasses(args: {
  status: Status;
  config: StatefulConfig;
  childProps: React.PropsWithChildren<any>;
}): Record<string, boolean> {
  const { status, config, childProps } = args;

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

  return resolveProps({ valueMap, status, delimiter: config.delimiter });
}

/**
 * Creates a props object given the current status and status to value mapping.
 */
function resolveProps<T = unknown>(args: {
  valueMap: Record<Status, unknown>;
  status: Status;
  delimiter?: string;
  childProps?: React.PropsWithChildren<any>;
}): Record<string, T> {
  const { valueMap, status, delimiter, childProps = {} } = args;

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
  } else if (Object(value) === value) {
    return value as Record<string, T>;
  }
  console.warn("[Stateful] resolveProps - unhandled value type", value);
  return {};
}

/**
 * Returns the generated className for the child.
 * Preserves the original className and adds additional classes based on the current status and config.
 *
 * @param args
 */
function getClassName(args: {
  childProps: Record<string, unknown>;
  status: Status;
  config: StatefulConfig;
}): string {
  const { childProps, status, config } = args;

  if (status === Status.IDLE) {
    return childProps.className as string;
  }

  // remove any pre-existing classes that exactly match our generated status classes
  const removeStatusClasses = (className: string = "") => {
    return AllStatuses.reduce((result, current) => {
      return result.replace(current, "");
    }, className).trim();
  };

  return cx(
    removeStatusClasses(childProps.className as string),
    getStatusClasses({ status, config, childProps })
  );
}

/**
 * Returns an object with props that are unknown to our mechanism and therefore must be passed to the child.
 *
 * @param args
 */
function getUnknownProps(args: {
  childProps: Record<string, unknown>;
  status: Status;
  config: StatefulConfig;
  ownPropNames: string[];
}): Record<string, unknown> {
  const { childProps, status, config, ownPropNames = [] } = args;

  const keysToMonitor = asArray({
    value: config.monitor,
    delimiter: config.delimiter,
    childProps,
    status,
  });

  const keysToConfirm = asArray({
    value: typeof config.confirm === "boolean" ? undefined : config.confirm,
    delimiter: config.delimiter,
    childProps,
    status,
  });

  const keysToSkip = Array.from(
    new Set(["children", ...keysToMonitor, ...keysToConfirm, ...ownPropNames])
  );

  return omitProps(childProps, keysToSkip);
}
