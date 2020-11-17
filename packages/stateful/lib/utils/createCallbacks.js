"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isPromise_1 = __importDefault(require("./isPromise"));
var asArray_1 = __importDefault(require("./asArray"));
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
function createCallbacks(childProps, callbackNames, handlers, delimiter) {
    if (!callbackNames) {
        return {};
    }
    function runCallback(callback) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var result = callback.apply(void 0, args);
        if (isPromise_1.default(result)) {
            var promise = result;
            promise.catch(handlers.onReject);
            promise.then(handlers.onResolve);
            handlers.onPromise(promise);
        }
    }
    return asArray_1.default(callbackNames, delimiter).reduce(function (result, callbackName) {
        var callbackCandidate = childProps[callbackName];
        if (typeof callbackCandidate === "function") {
            result[callbackName] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return runCallback.apply(void 0, __spreadArrays([callbackCandidate], args));
            };
        }
        return result;
    }, {});
}
exports.default = createCallbacks;
