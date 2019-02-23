"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useWillUnmount;

var _react = require("react");

function useWillUnmount(func) {
  (0, _react.useEffect)(function () {
    return func;
  }, []);
}