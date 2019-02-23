"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDidMount;

var _react = require("react");

function useDidMount(func) {
  (0, _react.useEffect)(function () {
    return typeof func === 'function' && func();
  }, []);
}