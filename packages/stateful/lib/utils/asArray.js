"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asArray;

function asArray(value) {
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

  if (typeof value === 'string') {
    return value.split(delimiter);
  }

  return value;
}