"use strict";
exports.__esModule = true;
exports.variablelify = void 0;
var lodash_1 = require("lodash");
var unsymbol_1 = require("./unsymbol");
var escapeNumbers_1 = require("./escapeNumbers");
/**
 * Makes a text a valid variable name in camelCase
 * @param text The text you want to variablelify
 * @returns A valid variable name
 * @example
 * variablelify("10 Dollars + 50 Shades (Plus)") // tenDollarsPlusFiftyShadesParenthesesPlusParentheses
 */
var variablelify = function (text) {
    return lodash_1.camelCase(escapeNumbers_1.escapeNumbers(unsymbol_1.unsymbol(text)));
};
exports.variablelify = variablelify;
//# sourceMappingURL=variablelify.js.map