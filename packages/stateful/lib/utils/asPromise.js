"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asPromise;

function asPromise(value) {
  if (value && typeof value.then === 'function') {
    return value;
  }

  return undefined;
}