import _ from 'lodash'

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
export const unsymbol = (text:string, literal?:boolean, extensions?:Record<string,unknown>):string => {
    const lit = literal ? true : false
    const symbols = {
        '`': lit ? 'Apostrophe' : '',
        '~': lit ? 'Tilde' : 'Not',
        '!': lit ? 'Exclamation' : '',
        '¡': lit ?'Exclamation' : '',
        '@': 'At',
        '#': 'Hashtag',
        '$': 'Dollar',
        '%': 'Percentage',
        '^': 'Power',
        '&': lit ? 'Ampersand' : 'And',
        '*': lit ? 'Asterisk' : 'Multiply',
        '(': lit ? 'Parentheses' : '',
        ')': lit ? 'Parentheses' : '',
        '-': 'Minus',
        '_': lit ? 'Underscore' : '',
        '+': 'Plus',
        '=': 'Equal',
        '/': 'Slash',
        '[': lit ? 'SquareBracket' : '',
        '{': lit ? 'Bracket' : '',
        ']': lit ? 'SquareBracket' : '',
        '}': lit ? 'Bracket' : '',
        '\\': 'Backslash',
        '|': lit ? 'VerticalBar' : 'Or',
        ';': lit ? 'Semicolon' : '',
        ':': lit ? 'Colon' : '',
        "'": lit ? 'Apostrophe': '',
        '"': lit ? 'Ditto': '',
        ',': lit ? 'Comma': '',
        '<': 'Less',
        '.': lit ? 'Period' : '',
        '>': 'Greater',
        '?': lit ? 'Question' : '',
        '¿': lit ? 'Question' : '',
        ...extensions
    }    

    text = _.deburr(text)
    Object.entries(symbols).forEach(entry => {
        const [symbol, escapedSymbol] = entry
        const symbolRegExp = new RegExp(_.escapeRegExp(symbol),'g')

        text = text.replace(symbolRegExp, escapedSymbol)
    })
    return text
}