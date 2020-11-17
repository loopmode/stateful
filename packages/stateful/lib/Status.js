"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllStatuses = exports.Status = void 0;
var Status;
(function (Status) {
    /**
     * The default status
     */
    Status["IDLE"] = "idle";
    /**
     * Describes that a callback returned a promise
     */
    Status["PENDING"] = "pending";
    /**
     * Describes that the operation has been `PENDING` for longer than the `busyDelay` milliseconds
     */
    Status["BUSY"] = "busy";
    /**
     * Describes that the promise was resolved with a non-error value
     */
    Status["SUCCESS"] = "success";
    /**
     * Describes that the promise was rejected, or resolved with an `Error`
     */
    Status["ERROR"] = "error";
})(Status = exports.Status || (exports.Status = {}));
exports.AllStatuses = [
    Status.IDLE,
    Status.PENDING,
    Status.BUSY,
    Status.SUCCESS,
    Status.ERROR,
];
