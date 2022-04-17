"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HelpscriptError_1 = __importDefault(require("./HelpscriptError"));
/** Returns an array of numbers by the given values
 * (works like the range python function)
*/
function range(start, end, step) {
    if (typeof (start) !== 'number') {
        throw new HelpscriptError_1.default("Error in function 'range', 'start' is not a number");
    }
    if (end && typeof (end) !== 'number') {
        throw new HelpscriptError_1.default("Error in function 'range', 'end' is not a number");
    }
    if (step && typeof (step) !== 'number') {
        throw new HelpscriptError_1.default("Error in function 'range', 'end' is not a number");
    }
    var innerStart = typeof (end) === 'undefined' ? 0 : start;
    var innerEnd = typeof (end) === 'undefined' ? start : end;
    var delta = innerEnd - innerStart;
    var innerStep = typeof (step) === 'undefined' ? Math.sign(delta) : step;
    if (innerStep === 0) {
        throw new HelpscriptError_1.default("Error in function 'range', the 'step' can't be 0");
    }
    // Checks that the increment has the same sign as the subtraction
    // (if is a decreasing list, then the step must be decreasing)
    if (Math.sign(delta) !== Math.sign(innerStep)) {
        throw new HelpscriptError_1.default("Error in function 'range', the 'step' has a sign that will make\n        the list never end");
    }
    var innerRange = [];
    if (delta > 0) {
        for (var i = innerStart; i < innerEnd; i += innerStep) {
            innerRange.push(i);
        }
    }
    else {
        for (var i = innerStart; i > innerEnd; i += innerStep) {
            innerRange.push(i);
        }
    }
    return innerRange;
}
exports.default = range;
