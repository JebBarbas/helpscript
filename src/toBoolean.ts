/**
 * Converts the expression to a boolean
 * @param expression The expression to booleanize
 * @returns The expression as a boolean
 * @example
 * boolean([]) // true
 * boolean(0) // false
 * boolean("") // false
 */
export const toBoolean = (expression:unknown):boolean => {
    return !!expression
}