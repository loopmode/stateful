"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createCallbacks;

var _asPromise = _interopRequireDefault(require("./asPromise"));

var _asArray = _interopRequireDefault(require("./asArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function createCallbacks(childProps, callbackNames, _ref, delimiter) {
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