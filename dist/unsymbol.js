"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.unsymbol = void 0;
var lodash_1 = __importDefault(require("lodash"));
/**
 * Unsymbols the text with an escaped string
 * @param text The text with symbols
 * @param literal If true then the symbols are converted as literal EX: if literal is true "&" will be "Ampersand" and if is false, will be "And"
 * @param extensions An object used if you want to rewrite or add symbol support
 * @returns The text but without symbols
 * @example
 * unsymbol('Red + Blue') // Red Plus Blue
 * unsymbol('me & you', true) // me Ampersand you
 * unsymbol('5!',false,{'!':'Factorial','5':'Cinco'}) // CincoFactorial
 */
var unsymbol = function (text, literal, extensions) {
    var lit = literal ? true : false;
    var symbols = __assign({ '`': lit ? 'Apostrophe' : '', '~': lit ? 'Tilde' : 'Not', '!': lit ? 'Exclamation' : '', '¡': lit ? 'Exclamation' : '', '@': 'At', '#': 'Hashtag', '$': 'Dollar', '%': 'Percentage', '^': 'Power', '&': lit ? 'Ampersand' : 'And', '*': lit ? 'Asterisk' : 'Multiply', '(': lit ? 'Parentheses' : '', ')': lit ? 'Parentheses' : '', '-': 'Minus', '_': lit ? 'Underscore' : '', '+': 'Plus', '=': 'Equal', '/': 'Slash', '[': lit ? 'SquareBracket' : '', '{': lit ? 'Bracket' : '', ']': lit ? 'SquareBracket' : '', '}': lit ? 'Bracket' : '', '\\': 'Backslash', '|': lit ? 'VerticalBar' : 'Or', ';': lit ? 'Semicolon' : '', ':': lit ? 'Colon' : '', "'": lit ? 'Apostrophe' : '', '"': lit ? 'Ditto' : '', ',': lit ? 'Comma' : '', '<': 'Less', '.': lit ? 'Period' : '', '>': 'Greater', '?': lit ? 'Question' : '', '¿': lit ? 'Question' : '' }, extensions);
    text = lodash_1["default"].deburr(text);
    Object.entries(symbols).forEach(function (entry) {
        var symbol = entry[0], escapedSymbol = entry[1];
        var symbolRegExp = new RegExp(lodash_1["default"].escapeRegExp(symbol), 'g');
        text = text.replace(symbolRegExp, escapedSymbol);
    });
    return text;
};
exports.unsymbol = unsymbol;
//# sourceMappingURL=unsymbol.js.map