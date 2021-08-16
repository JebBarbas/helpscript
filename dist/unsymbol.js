"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.unsymbol = void 0;
var lodash_1 = __importDefault(require("lodash"));
var symbols = {
    '`': 'Apostrophe',
    '~': 'Tilde',
    '!': 'Exclamation',
    '¡': 'Exclamation',
    '@': 'At',
    '#': 'Hashtag',
    '$': 'Dollar',
    '%': 'Percentage',
    '^': 'Power',
    '&': 'Ampersand',
    '*': 'Asterisk',
    '(': 'Parentheses',
    ')': 'Parentheses',
    '-': 'Minus',
    '_': 'Underscore',
    '+': 'Plus',
    '=': 'Equal',
    '/': 'Slash',
    '[': 'SquareBracket',
    '{': 'Bracket',
    ']': 'SquareBracket',
    '}': 'Bracket',
    '\\': 'Backslash',
    '|': 'Or',
    ';': 'Semicolon',
    ':': 'Colon',
    "'": 'Apostrophe',
    '"': 'Ditto',
    ',': 'Comma',
    '<': 'Less',
    '.': 'Period',
    '>': 'Greater',
    '?': 'Question',
    '¿': 'Question'
};
/**
 * Unsymbols the text with an escaped string
 * @param text The text with symbols
 * @returns The text but without symbols
 * @example
 * unsymbol('Red + Blue') // Red Plus Blue
 */
var unsymbol = function (text) {
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