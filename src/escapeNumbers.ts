import { numberName } from "./numberName"

/**
 * Converts the numbers in a string in the name of the numbers
 * @param text The text with numbers
 * @param capitalize true if you want to make the number name's first letter in upper case
 * @returns The text with the numbers replaced with the number's name
 * @example
 * escapeNumbers("80 years") // eighty years
 * escapeNumbers("5 Dollars", true) // Five Dollars
 */
export const escapeNumbers = (text:string, capitalize?:boolean):string => {
    const cap = capitalize ? true : false
    
    const numberRegExp = /\d+/g
    const numbers = text.match(numberRegExp)

    if(numbers){
        numbers.forEach(number => {
            text = text.replace(number, numberName(Number(number), cap))
        })
    }
    
    return text
}