/**
 * Alias to "typeof expression"
 * @param expression The expression
 * @returns The type of the expression
 * @example
 * type("hola") // string
 */
export const type = (expression:any):string => {
    return typeof expression
}