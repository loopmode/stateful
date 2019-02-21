"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = overrideCallbacks;

var _asPromise = _interopRequireDefault(require("./asPromise"));

var _asArray = _interopRequireDefault(require("./asArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function overrideCallbacks(childProps, callbackNames, _ref, delimiter) {
  var onPromise = _ref.onPromise,
      onResolve = _ref.onResolve,
      onReject = _ref.onReject;

  if (!callbackNames) {
    return {};
  }

  function wrapCallback(originalCallback) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var callbackResult = originalCallback.apply(void 0, args);
    var promise = (0, _asPromise.default)(callbackResult);

    if (promise) {
      promise.catch(onReject);
      promise.then(onResolve);
      onPromise(promise);
    }
  }

  return (0, _asArray.default)(callbackNames, delimiter).reduce(function (result, callbackName) {
    var originalCallback = childProps[callbackName];

    if (typeof originalCallback === 'function') {
      result[callbackName] = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return wrapCallback.apply(void 0, [originalCallback].concat(args));
      };
    }

    return result;
  }, {});
}