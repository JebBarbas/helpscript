"use strict";
exports.__esModule = true;
exports.toNumber = void 0;
/**
 * Converts an expression to a number
 * @param expression The expression
 * @returns A number that represents the expression
 * @example
 * toNumber(100) // 100
 * toNumber(true) // 1
 * toNumber([1,2,3]) // 3
 * toNumber("hola") // 4
 * toNumber({name:"Juan", age:12, length:168}) // 168
 */
var toNumber = function (expression) {
    if (typeof expression === 'number')
        return expression;
    if (typeof expression === 'boolean')
        return expression ? 1 : 0;
    if (expression.hasOwnProperty('length'))
        return expression.length;
    return 0;
};
exports.toNumber = toNumber;
//# sourceMappingURL=toNumber.js.map