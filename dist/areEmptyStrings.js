"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HelpscriptError_1 = __importDefault(require("./HelpscriptError"));
/** Returns true if one or more of the given strings is an empty string (''), useful
 * in required forms that are validated by JavaScript.
 *
 * Note: This function DOESN'T clean the values, so, if you pass a value like
 * '        ', this won't be valued as empty string, if you want to make this, consider
 * using:
 *
 * ```js
 * const { clean, areEmptyStrings } = require('helpscript')
 * areEmptyStrings(...strings.map(clean))
 * ```
 */
function areEmptyStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    strings.forEach(function (maybeString, index) {
        var type = typeof (maybeString);
        if (type !== 'string') {
            throw new HelpscriptError_1.default("Error in function 'areEmptyStrings', not all parameters are strings (found type '" + type + "' in position '" + index + "')");
        }
    });
    return strings.some(function (string) { return string.length === 0; });
}
exports.default = areEmptyStrings;
