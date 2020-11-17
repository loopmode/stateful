"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getFlagKeys = exports.getStatusClassNames = exports.getStatusPropKeys = exports.pickProps = exports.omitProps = exports.createFlags = exports.createProps = exports.createStatusProps = exports.createStatusClassFlags = void 0;
var Status_1 = require("../Status");
var asArray_1 = __importDefault(require("./asArray"));
/**
 * Creates an object with boolean flags for the defined CSS classNames and given `status`.
 * The object has a property and the value `true` for each of the class
 * names provided for the current status.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} props The props of the Stateful instance
 */
function createStatusClassFlags(status, props) {
    var _a;
    var flags = (_a = {},
        _a[Status_1.Status.PENDING] = props.pendingClasses,
        _a[Status_1.Status.BUSY] = __spreadArrays(asArray_1.default(props.pendingClasses), asArray_1.default(props.busyClasses)),
        _a[Status_1.Status.SUCCESS] = props.successClasses,
        _a[Status_1.Status.ERROR] = props.errorClasses,
        _a);
    return createProps(flags, status, props.delimiter);
}
exports.createStatusClassFlags = createStatusClassFlags;
/**
 * Creates an object with boolean flags for the defined props and given `status`.
 * The object has a property and the value `true` for each propName
 * that was defined for the matching state.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} props The props of the Stateful instance
 */
function createStatusProps(status, props) {
    var _a;
    var flags = (_a = {},
        _a[Status_1.Status.PENDING] = props.pendingProps,
        _a[Status_1.Status.BUSY] = __spreadArrays(asArray_1.default(props.pendingProps), asArray_1.default(props.busyProps)),
        _a[Status_1.Status.SUCCESS] = props.successProps,
        _a[Status_1.Status.ERROR] = props.errorProps,
        _a);
    return createProps(flags, status, props.delimiter);
}
exports.createStatusProps = createStatusProps;
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
function createProps(flagMap, //Record<Status, string | ((v: Status) => string)>,
status, delimiter) {
    var statusFlags = flagMap[status];
    if (typeof statusFlags === "function") {
        return statusFlags(status);
    }
    else if (Array.isArray(statusFlags) || typeof statusFlags === "string") {
        return createFlags(statusFlags, delimiter);
    }
    return {};
}
exports.createProps = createProps;
/**
 * Takes one or more string keys and returns an object with boolean flags for each key.
 * If `key` contains multiple values, the returned object contains a property for each key.
 *
 * @param {String | String[]} key One or more names for properties in the returned object
 * @param {String} delimiter A string for splitting multi-value `key` strings into an array
 * @param {*} [value=true] The value to set for all properties
 * @returns {Object} An object with the specified properties. All properties have the same `value`
 */
function createFlags(key, delimiter, value) {
    if (delimiter === void 0) { delimiter = " "; }
    if (value === void 0) { value = true; }
    var keys = asArray_1.default(key, delimiter);
    if (!keys) {
        return {};
    }
    return keys.reduce(function (result, propName) {
        var _a;
        return __assign(__assign({}, result), (_a = {}, _a[propName] = value, _a));
    }, {});
}
exports.createFlags = createFlags;
/**
 * Creates an object with only foreign properties.
 *
 * @param {*} childProps A child's props object
 * @param {String[]} omittedNames Names of props to exclude from the result
 * @return {*} The remaining props object
 */
function omitProps(childProps, omittedNames) {
    if (omittedNames === void 0) { omittedNames = []; }
    return Object.keys(childProps).reduce(function (result, key) {
        if (!omittedNames.includes(key)) {
            result[key] = childProps[key];
        }
        return result;
    }, {});
}
exports.omitProps = omitProps;
function pickProps(childProps, names) {
    if (names === void 0) { names = []; }
    return names.reduce(function (result, name) {
        result[name] = childProps[name];
        return result;
    }, {});
}
exports.pickProps = pickProps;
function getStatusPropKeys(statuses, props) {
    return getFlagKeys(statuses, props, createStatusProps);
}
exports.getStatusPropKeys = getStatusPropKeys;
function getStatusClassNames(statuses, props) {
    return getFlagKeys(statuses, props, createStatusClassFlags);
}
exports.getStatusClassNames = getStatusClassNames;
function getFlagKeys(statuses, props, createFlags) {
    var ignoredValues = statuses.reduce(function (result, ignoredStatus) {
        var values = createFlags(ignoredStatus, props);
        return result.concat(Object.keys(values));
    }, []);
    return Array.from(new Set(ignoredValues));
}
exports.getFlagKeys = getFlagKeys;
