"use strict";
exports.__esModule = true;
exports.sleep = void 0;
/**
 * Stops the program for ms miliseconds
 * @param ms The miliseconds that the program is going to be stopped
 * @example
 * sleep(1000) // sleeps 1 second
 */
var sleep = function (ms) {
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
};
exports.sleep = sleep;
//# sourceMappingURL=sleep.js.map