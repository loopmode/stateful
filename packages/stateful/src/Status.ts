export enum Status {
  /**
   * The default status
   */
  IDLE = "idle",

  /**
   * Status when a callback was invoked and returned a promise
   */
  PENDING = "pending",

  /**
   * Status when the operation has been `PENDING` for at least `busyDelay` milliseconds
   */
  BUSY = "busy",

  /**
   * Status when the promise was resolved with a non-error value
   */
  SUCCESS = "success",

  /**
   * Status when the promise was rejected or resolved with an `Error` value
   */
  ERROR = "error",

  /**
   * Status when a callback was intercepted and awaits confirmation by the user
   */
  CONFIRM = "confirm"
}

export const AllStatuses = [
  Status.IDLE,
  Status.PENDING,
  Status.BUSY,
  Status.SUCCESS,
  Status.ERROR,
  Status.CONFIRM,
];
