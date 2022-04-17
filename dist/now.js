"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Gets the date and milisecond of this moment (in UTC) */
function now() {
    var nowDate = new Date();
    return {
        date: nowDate,
        time: nowDate.getTime()
    };
}
exports.default = now;
