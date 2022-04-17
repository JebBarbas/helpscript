"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Returns true if one or more of the given values is null or undefined */
function areNullishValues() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.some(function (value) { return value === undefined || value === null; });
}
exports.default = areNullishValues;
