"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStatusClasses = createStatusClasses;
exports.createStatusProps = createStatusProps;
exports.createProps = createProps;
exports.createFlags = createFlags;
exports.omitProps = omitProps;

var Status = _interopRequireWildcard(require("./Status"));

var _asArray = _interopRequireDefault(require("./asArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Creates an object with boolean flags for the defined CSS classNames.
 * The object has a property and the value `true` for each class
 * that was defined for the matching state.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} props The props of the Stateful instance
 */
function createStatusClasses(status, props) {
  var _flags;

  var flags = (_flags = {}, _defineProperty(_flags, Status.PENDING, props.pendingClasses), _defineProperty(_flags, Status.BUSY, props.busyClasses), _defineProperty(_flags, Status.SUCCESS, props.successClasses), _defineProperty(_flags, Status.ERROR, props.errorClasses), _flags);
  return createProps(flags, status, props.delimiter);
}
/**
 * Creates an object with boolean flags for the defined props.
 * The object has a property and the value `true` for each propName
 * that was defined for the matching state.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} props The props of the Stateful instance
 */


function createStatusProps(status, props) {
  var _flags2;

  var flags = (_flags2 = {}, _defineProperty(_flags2, Status.PENDING, props.pendingProps), _defineProperty(_flags2, Status.BUSY, props.busyProps), _defineProperty(_flags2, Status.SUCCESS, props.successProps), _defineProperty(_flags2, Status.ERROR, props.errorProps), _flags2);
  return createProps(flags, status, props.delimiter);
}

function createProps(flags, status, delimiter) {
  var statusFlags = flags[status];

  if (typeof statusFlags === 'function') {
    return statusFlags(status);
  } else {
    return createFlags(statusFlags, delimiter);
  }
}
/**
 * Takes one or more string keys and returns an object with boolean flags for each key.
 * If `key` contains multiple values, the returned object contains a property for each key.
 *
 * @param {String | String[]} key One or more names for properties in the returned object
 * @param {String} delimiter A string for splitting multi-value `key` strings into an array
 * @param {*} [value=true] The value for each property of the returned object
 * @returns {Object} An object that has a property for each `key` provided and contains the `value`
 */


function createFlags(key, delimiter) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var keys = (0, _asArray.default)(key, delimiter);

  if (!keys) {
    return {};
  }

  return keys.reduce(function (result, propName) {
    return _objectSpread({}, result, _defineProperty({}, propName, value));
  }, {});
}
/**
 * Creates an object with props that are unknown and should be passed along to the children.
 * The object contains all props not found in a given list `omittedNames`.
 *
 * @param {*} childProps A child's props object
 * @param {String[]} omittedNames Names of props to exclude from the result
 * @return {*} The remaining props object
 */


function omitProps(childProps) {
  var omittedNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object.keys(childProps).reduce(function (result, key) {
    if (!omittedNames.includes(key)) {
      result[key] = childProps[key];
    }

    return result;
  }, {});
}