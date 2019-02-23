"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useTimeout(func) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPending = _useState2[0],
      setPending = _useState2[1];

  (0, _react.useEffect)(function () {
    if (isPending) {
      var timeoutID = window.setTimeout(func, delay);
      return function () {
        window.clearTimeout(timeoutID);
      };
    }
  }, [isPending]);
  return {
    clear: function clear() {
      return setPending(false);
    },
    start: function start() {
      return setPending(true);
    }
  };
}

var _default = useTimeout;
exports.default = _default;