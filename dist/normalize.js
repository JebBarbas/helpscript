"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HelpscriptError_1 = __importDefault(require("./HelpscriptError"));
var getDx_1 = __importDefault(require("./getDx"));
/** Normalizes a number between a given range and a condition
 * - '()' excludes both numbers in the range.
 * - '(]' excludes minimum and includes maximum.
 * - '[)' includes minimum and excludes maximum.
 * - '[]' includes both numbers in the range.
*/
function normalize(value, range, condition) {
    if (typeof (value) === 'bigint') {
        throw new HelpscriptError_1.default("Error in function 'normalize', this function actually doesn't support bignints");
    }
    if (typeof (value) !== 'number') {
        throw new HelpscriptError_1.default("Error in function 'normalize', value is not a number");
    }
    range.forEach(function (maybeNumber, index) {
        var type = typeof (maybeNumber);
        if (type !== 'number') {
            throw new HelpscriptError_1.default("Error in function 'normalize', not all values in range\n            are numbers (found type '" + type + "' in position '" + index + "')");
        }
    });
    switch (condition) {
        case '()':
            if (value <= range[0])
                return range[0] + getDx_1.default(range[0]);
            if (value >= range[1])
                return range[1] - getDx_1.default(range[1]);
            return value;
        case '(]':
            if (value <= range[0])
                return range[0] + getDx_1.default(range[0]);
            if (value >= range[1])
                return range[1];
            return value;
        case '[)':
            if (value <= range[0])
                return range[0];
            if (value >= range[1])
                return range[1] - getDx_1.default(range[1]);
            return value;
        default:
            if (value <= range[0])
                return range[0];
            if (value >= range[1])
                return range[1];
            return value;
    }
}
exports.default = normalize;
