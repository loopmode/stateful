/**
 * The default status
 */
export const IDLE = 0;

/**
 * Describes that a callback returned a promise
 */
export const PENDING = 1;

/**
 * Describes that the operation has been `PENDING` for longer than the `busyDelay` milliseconds
 */
export const BUSY = 2;

/**
 * Describes that the promise was resolved with a non-error value
 */
export const SUCCESS = 3;

/**
 * Describes that the promise was rejected, or resolved with an `Error`
 */
export const ERROR = 4;
