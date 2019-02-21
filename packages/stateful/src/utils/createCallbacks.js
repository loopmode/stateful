import asPromise from './asPromise';
import asArray from './asArray';

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
 * @returns {Object} Object containing wrapped callbacks with their original names
 */
export default function createCallbacks(
    childProps,
    callbackNames,
    { onPromise, onResolve, onReject },
    delimiter
) {
    if (!callbackNames) {
        return {};
    }

    function wrapCallback(originalCallback, ...args) {
        const callbackResult = originalCallback(...args);
        const promise = asPromise(callbackResult);
        if (promise) {
            promise.catch(onReject);
            promise.then(onResolve);
            onPromise(promise);
        }
    }

    return asArray(callbackNames, delimiter).reduce((result, callbackName) => {
        const originalCallback = childProps[callbackName];
        if (typeof originalCallback === 'function') {
            result[callbackName] = (...args) =>
                wrapCallback(originalCallback, ...args);
        }

        return result;
    }, {});
}
