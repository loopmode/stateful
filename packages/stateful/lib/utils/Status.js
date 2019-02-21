"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR = exports.SUCCESS = exports.BUSY = exports.PENDING = exports.IDLE = void 0;

/**
 * The default status
 */
var IDLE = 0;
/**
 * Describes that a callback returned a promise
 */

exports.IDLE = IDLE;
var PENDING = 1;
/**
 * Describes that the operation has been `PENDING` for longer than the `busyDelay` milliseconds
 */

exports.PENDING = PENDING;
var BUSY = 2;
/**
 * Describes that the promise was resolved with a non-error value
 */

exports.BUSY = BUSY;
var SUCCESS = 3;
/**
 * Describes that the promise was rejected, or resolved with an `Error`
 */

exports.SUCCESS = SUCCESS;
var ERROR = 4;
exports.ERROR = ERROR;