"use strict";
exports.__esModule = true;
exports.numberName = void 0;
/**
 * Converts a number into its name, code getted from https://stackoverflow.com/questions/14766951/transform-numbers-to-words-in-lakh-crore-system, the maximum number to translate is 999,999,999
 * @param number The number to get its name
 * @returns The name of the number
 */
var numberName = function (number, capitalize) {
    var cap = capitalize ? true : false;
    var numStr = cap ? "Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen" : "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen";
    var num = numStr.split(" ");
    var tensStr = cap ? "Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety" : "twenty thirty forty fifty sixty seventy eighty ninety";
    var tens = tensStr.split(" ");
    /* If the number is less than 20 then gets the number from the num array */
    if (number < 20)
        return num[number];
    // If not (number >= 20) then stores in digit the number in "las unidades"
    var digit = number % 10;
    if (number < 100)
        return tens[~~(number / 10) - 2] + (digit ? "-" + num[digit] : "");
    if (number < 1000)
        return num[~~(number / 100)] + " hundred" + (number % 100 == 0 ? "" : " " + exports.numberName(number % 100));
    if (number < 1000000)
        return exports.numberName(~~(number / 1000)) + " thousand" + (number % 1000 != 0 ? " " + exports.numberName(number % 1000) : "");
    if (number < 1000000000)
        return exports.numberName(~~(number / 1000000)) + " million" + (number % 1000000 != 0 ? " " + exports.numberName(number % 1000000) : "");
    if (number < 1000000000000)
        return exports.numberName(~~(number / 1000000000)) + " billion" + (number % 1000000000 != 0 ? " " + exports.numberName(number % 1000000000) : "");
    if (number < Number.MAX_SAFE_INTEGER)
        return exports.numberName(~~(number / 1000000000000)) + " trillion" + (number % 1000000000000 != 0 ? " " + exports.numberName(number % 1000000000000) : "");
    return "overflow";
};
exports.numberName = numberName;
//# sourceMappingURL=numberName.js.map