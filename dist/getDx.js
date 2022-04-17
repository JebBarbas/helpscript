"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HelpscriptError_1 = __importDefault(require("./HelpscriptError"));
/** Gets the minimum number that makes a difference in the value
 *
 * For example, if you add 3 + 1e-20 is still 3, but 3 + 1e-15 makes a difference
 * , but 100 + 1e-15 is still 100, and you need 1e-14 to make a difference.
 *
 * When the value goes up, it also does the dx.
*/
function getDx(x) {
    if (typeof (x) !== 'number') {
        throw new HelpscriptError_1.default("Error in function 'getDx', x is not a number");
    }
    var dx = 1e-15;
    while (x + dx === x) {
        dx *= 10;
    }
    return dx;
}
exports.default = getDx;
