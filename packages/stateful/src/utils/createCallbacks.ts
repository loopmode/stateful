import isPromise from "./isPromise";
import asArray from "./asArray";
import { StatefulHandlers } from "../types";

/**
 * Creates an object with handler functions for the callbacks of a given child.
 *
 * Each child prop of type function whose name is included in `callbackNames` will be
 * wrapped by a new function that invokes the original one and checks its return value.
 *
 * When the returned value is a promise, the `{onPromise, onResolve, onReject}`
 * handlers will be attached to the returned promise.
 *
 *
 * @param {Object} childProps - Child props object
 * @param {String | String[]} callbackNames - Names of callbacks to wrap (Multiple values via space-seprated string or array)
 * @param {Object} handlers - Handler functions for promise handling
 * @param {Function} handlers.onPromise - Invoked when the callback returned a promise
 * @param {Function} handlers.onResolve - Invoked when the returned promise is resolved
 * @param {Function} handlers.onReject - Invoked when the returned promise is rejected
 */
export default function createCallbacks(options: {
  childProps: any;
  monitor: string | string[] | undefined;
  confirm: boolean | string | string[] | undefined;
  handlers: StatefulHandlers;
  delimiter?: string;
  promisesOnly?: boolean;
}) {
  if (!options.monitor) {
    return {};
  }

  async function runCallback(
    originalCallback: (...args: any[]) => any,
    callbackName: string,
    ...args: any[]
  ) {
    if (shouldConfirm(callbackName, options)) {
      options.handlers.onConfirmShow(() => {
        runCallback(originalCallback, callbackName, ...args);
      });
      return;
    }
    if (options.promisesOnly) {
      const result = originalCallback(...args);
      if (isPromise(result)) {
        options.handlers.onPromise();
        const promise = result as Promise<any>;
        promise.catch(options.handlers.onReject);
        promise.then(options.handlers.onResolve);
      }
    } else {
      options.handlers.onPromise();
      try {
        const result = await originalCallback(...args);
        options.handlers.onResolve(result);
      } catch (error) {
        options.handlers.onReject(error);
      }
    }
  }

  return asArray.simple(options.monitor, options.delimiter).reduce((result, callbackName) => {
    const originalCallback = options.childProps[callbackName];
    if (typeof originalCallback === "function") {
      result[callbackName] = (...args: any[]) => {
        return runCallback(originalCallback, callbackName, ...args);
      };
    }

    return result;
  }, {} as any);
}

function shouldConfirm(
  callbackName: string,
  options: {
    monitor: string | string[] | undefined;
    confirm: boolean | string | string[] | undefined;
  }
) {
  if (!options.confirm) {
    return false;
  }
  if (typeof options.confirm === "boolean") {
    return options.monitor?.includes(callbackName);
  }

  return (options.confirm as string | string[]).includes(callbackName);
}
