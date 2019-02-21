"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectStatefulProps;
exports.getFlags = getFlags;

var _classnames = _interopRequireDefault(require("classnames"));

var Status = _interopRequireWildcard(require("./Status"));

var _asArray = _interopRequireDefault(require("./asArray"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * @param {Object} childProps An object with the props of the child component
 * @param {Object} ownProps An object with the props of the `Stateful` wrapper component
 * @param {Object} status The current `Status` value
 * @param {String} [delimiter] A string for splitting multi-value strings into an array
 */
function injectStatefulProps(childProps, ownProps, status, delimiter) {
  return _objectSpread({
    className: (0, _classnames.default)(childProps.className, getClassFlags(ownProps, status, delimiter))
  }, getPropFlags(ownProps, status, delimiter));
}
/**
 * Takes a key and a value and returns an object.
 * The `key` may contain multiple values, in which case the
 * resulting object contains a property for each key.
 *
 * @param {String | String[]} key One or more names for properties in the returned object
 * @param {*} value The value for all properties of the returned object
 * @param {String} delimiter A string for splitting multi-value `key` strings into an array
 * @returns {Object} An object that has a property for each `key` provided and contains the `value`
 */


function getFlags(key, value, delimiter) {
  if (!key) {
    return {};
  }

  return (0, _asArray.default)(key, delimiter).reduce(function (result, flag) {
    return _objectSpread({}, result, _defineProperty({}, flag, value));
  }, {});
}

function getClassFlags(props, status, delimiter) {
  return getActiveFlags([{
    active: status === Status.PENDING,
    flags: props.pendingClasses
  }, {
    active: status === Status.BUSY,
    flags: props.busyClasses
  }, {
    active: status === Status.SUCCESS,
    flags: props.successClasses
  }, {
    active: status === Status.ERROR,
    flags: props.errorClasses
  }], delimiter);
}

function getPropFlags(props, status, delimiter) {
  return getActiveFlags([{
    active: status === Status.PENDING,
    flags: props.pendingProps
  }, {
    active: status === Status.BUSY,
    flags: props.busyProps
  }, {
    active: status === Status.SUCCESS,
    flags: props.successProps
  }, {
    active: status === Status.ERROR,
    flags: props.errorProps
  }], delimiter);
}

function getActiveFlags(states, delimiter) {
  var state = states.find(function (item) {
    return item.active;
  });

  if (state) {
    return getFlags(state.flags, true, delimiter);
  }

  return {};
}