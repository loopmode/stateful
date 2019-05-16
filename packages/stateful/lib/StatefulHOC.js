"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Stateful = _interopRequireDefault(require("./Stateful"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var statefulPropNames = Object.keys(_Stateful.default.defaultProps);

var getProps = function getProps(props) {
  return Object.keys(props).reduce(function (result, key) {
    if (statefulPropNames.includes(key)) {
      result.statefulProps[key] = props[key];
    } else {
      result.childProps[key] = props[key];
    }

    return result;
  }, {
    statefulProps: {},
    childProps: {}
  });
};

var StatefulHOC = function StatefulHOC(DecoratedClass, options) {
  return function (props) {
    var _getProps = getProps(props),
        statefulProps = _getProps.statefulProps,
        childProps = _getProps.childProps;

    return _react.default.createElement(_Stateful.default, _extends({}, options, statefulProps), _react.default.createElement(DecoratedClass, childProps));
  };
};

var _default = StatefulHOC;
exports.default = _default;