"use strict";
exports.__esModule = true;
exports.escapeNumbers = void 0;
var numberName_1 = require("./numberName");
/**
 * Converts the numbers in a string in the name of the numbers
 * @param text The text with numbers
 * @param capitalize true if you want to make the number name's first letter in upper case
 * @returns The text with the numbers replaced with the number's name
 * @example
 * escapeNumbers("80 years") // eighty years
 * escapeNumbers("5 Dollars", true) // Five Dollars
 */
var escapeNumbers = function (text, capitalize) {
    var cap = capitalize ? true : false;
    var numberRegExp = /\d+/g;
    var numbers = text.match(numberRegExp);
    if (numbers) {
        numbers.forEach(function (number) {
            text = text.replace(number, numberName_1.numberName(Number(number), cap));
        });
    }
    return text;
};
exports.escapeNumbers = escapeNumbers;
//# sourceMappingURL=escapeNumbers.js.map