import isPromise from "./isPromise";
import asArray from "./asArray";

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
export default function createCallbacks(
  childProps: any,
  callbackNames: string | string[],
  handlers: {
    onPromise: (promise: Promise<any>) => void;
    onResolve: (result?: any) => void;
    onReject: (error?: any) => void;
  },
  delimiter?: string
) {
  if (!callbackNames) {
    return {};
  }

  function runCallback(callback: (...args: any[]) => any, ...args: any[]) {
    const result = callback(...args);
    if (isPromise(result)) {
      const promise = result as Promise<any>;
      promise.catch(handlers.onReject);
      promise.then(handlers.onResolve);
      handlers.onPromise(promise);
    }
  }

  return asArray(callbackNames, delimiter).reduce((result, callbackName) => {
    const callbackCandidate = childProps[callbackName];
    if (typeof callbackCandidate === "function") {
      result[callbackName] = (...args: any[]) => {
        return runCallback(callbackCandidate, ...args);
      };
    }

    return result;
  }, {} as any);
}
