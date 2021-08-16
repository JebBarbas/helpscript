"use strict";
exports.__esModule = true;
exports.toBoolean = void 0;
/**
 * Converts the expression to a boolean
 * @param expression The expression to booleanize
 * @returns The expression as a boolean
 * @example
 * boolean([]) // true
 * boolean(0) // false
 * boolean("") // false
 */
var toBoolean = function (expression) {
    return !!expression;
};
exports.toBoolean = toBoolean;
//# sourceMappingURL=toBoolean.js.map