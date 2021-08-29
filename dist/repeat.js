"use strict";
exports.__esModule = true;
exports.repeat = void 0;
/* eslint-disable @typescript-eslint/ban-types */
var sleep_1 = require("./sleep");
/**
 *
 * @param callback The functions that is going to be repeated times times
 * @param times The times that the callback function is going to be repeated
 * @param time (Optional) The time to wait between each execution in miliseconds (default is 0)
 * @example
 * repeat(()=>console.log('Hola'),10,1000) // Logs 'Hola' 10 times with 1 second of difference
 */
var repeat = function (callback, times, time) {
    var localTime = time || 0;
    for (var i = 0; i < times; i++) {
        if (i != 0)
            sleep_1.sleep(localTime);
        callback();
    }
};
exports.repeat = repeat;
//# sourceMappingURL=repeat.js.map