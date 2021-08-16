import { camelCase } from 'lodash'
import { unsymbol } from './unsymbol'
import { escapeNumbers } from './escapeNumbers'

/**
 * Makes a text a valid variable name in camelCase
 * @param text The text you want to variablelify
 * @returns A valid variable name
 * @example
 * variablelify("10 Dollars + 50 Shades (Plus)") // tenDollarsPlusFiftyShadesPlus
 */
export const variablelify = (text:string):string => {
    return camelCase(escapeNumbers(unsymbol(text)))
}