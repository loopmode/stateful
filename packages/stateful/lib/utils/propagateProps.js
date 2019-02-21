"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = propagateProps;

/**
 * Creates an object with props that are unknown and should be passed along to the children.
 * The object contains all props not found in a given list `excludeNames`.
 *
 * @param {*} childProps A child's props object
 * @param {String[]} excludeNames Names of props to exclude from the result
 * @return {*} The remaining props object
 */
function propagateProps(childProps, excludeNames) {
  return Object.keys(childProps).reduce(function (result, key) {
    if (!excludeNames.includes(key)) {
      result[key] = childProps[key];
    }

    return result;
  }, {});
}