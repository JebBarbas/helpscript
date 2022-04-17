"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HelpscriptError_1 = __importDefault(require("./HelpscriptError"));
/** Cleans a string, triming it, lowercasing it ans normalizing it, useful to make searchs
 * when you want to match for example "El Día Del Niño" with "el dia del nino".
 *
 * Clean makes 3 things, trims the text, lowercases, and normalizes, if you dont want
 * to make some of this, use the second parameter options.
 *
 * ```js
 * clean('   My String', {lowercase:false}) // 'My String'
 * ```
 */
function clean(text, options) {
    var _a, _b, _c;
    if (typeof (text) !== 'string') {
        throw new HelpscriptError_1.default("Error in function 'clean', the value is not a string");
    }
    var innerTrim = (_a = options === null || options === void 0 ? void 0 : options.trim) !== null && _a !== void 0 ? _a : true;
    var innerLowercase = (_b = options === null || options === void 0 ? void 0 : options.lowercase) !== null && _b !== void 0 ? _b : true;
    var innerNormalize = (_c = options === null || options === void 0 ? void 0 : options.normalize) !== null && _c !== void 0 ? _c : true;
    var newText = text;
    if (innerTrim)
        newText = newText.trim();
    if (innerLowercase)
        newText = newText.toLowerCase();
    if (innerNormalize)
        newText = newText.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return newText;
}
exports.default = clean;
