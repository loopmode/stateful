"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StatefulButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _Stateful = _interopRequireDefault(require("../Stateful"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var pendingProps = function pendingProps() {
  return {
    children: 'Loading...',
    disabled: true
  };
};

var successProps = function successProps() {
  return {
    variant: 'success'
  };
};

var errorProps = function errorProps() {
  return {
    variant: 'danger'
  };
};

var StatefulButton = function StatefulButton(props) {
  return _react.default.createElement(_Stateful.default, _extends({
    pendingClasses: null,
    successClasses: null,
    errorClasses: null,
    pendingProps: pendingProps,
    busyProps: pendingProps,
    successProps: successProps,
    errorProps: errorProps
  }, props));
};

exports.StatefulButton = StatefulButton;
var _default = StatefulButton;
exports.default = _default;