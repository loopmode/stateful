export enum Status {
  /**
   * The default status
   */
  IDLE = "idle",

  /**
   * Describes that a callback returned a promise
   */
  PENDING = "pending",

  /**
   * Describes that the operation has been `PENDING` for longer than the `busyDelay` milliseconds
   */
  BUSY = "busy",

  /**
   * Describes that the promise was resolved with a non-error value
   */
  SUCCESS = "success",

  /**
   * Describes that the promise was rejected, or resolved with an `Error`
   */
  ERROR = "error",
}

export const AllStatuses = [
  Status.IDLE,
  Status.PENDING,
  Status.BUSY,
  Status.SUCCESS,
  Status.ERROR,
];
