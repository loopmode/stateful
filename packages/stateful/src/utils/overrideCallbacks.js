import asPromise from './asPromise';
import asArray from './asArray';

/**
 * Creates an object with callback overrides for a given child.
 *
 * Each child prop that is a function and whose name is included in the `callbackNames` list will be overridden.
 * It will be wrapped by a new function that invokes the original one and checks its return value.
 * Only if the returned value is a promise, the `{onPromise, onResolve, onReject}` mechanism will be set up.
 *
 * @param {Object} childProps - Child props object
 * @param {String | String[]} callbackNames - Names of callbacks to intercept (Multiple values via space-seprated string or array)
 * @param {Object} handlers - Handlers for intercepted callbacks
 * @param {Function} handlers.onPromise - Invoked if the intercepted callback returned a promise
 * @param {Function} handlers.onResolve - Invoked when the promise is resolved
 * @param {Function} handlers.onReject - Invoked when the promise is rejected
 * @returns {Object} Object containing the intercepted callbacks
 */
export default function overrideCallbacks(
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
