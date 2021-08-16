import _ from 'lodash'

const symbols = {
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
    '¿': 'Question',
}

/**
 * Unsymbols the text with an escaped string
 * @param text The text with symbols
 * @returns The text but without symbols
 * @example
 * unsymbol('Red + Blue') // Red Plus Blue
 */
export const unsymbol = (text:string):string => {
    text = _.deburr(text)
    Object.entries(symbols).forEach(entry => {
        const [symbol, escapedSymbol] = entry
        const symbolRegExp = new RegExp(_.escapeRegExp(symbol),'g')

        text = text.replace(symbolRegExp, escapedSymbol)
    })
    return text
}