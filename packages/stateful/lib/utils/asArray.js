"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asArray(value, delimiter) {
    if (delimiter === void 0) { delimiter = " "; }
    if (!value) {
        return [];
    }
    if (typeof value === "string") {
        return value.split(delimiter);
    }
    return value;
}
exports.default = asArray;
