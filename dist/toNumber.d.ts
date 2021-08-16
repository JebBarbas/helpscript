export interface objectWithLength extends Object {
    length: number;
}
export declare type withLength = number | string | boolean | objectWithLength;
/**
 * Converts an expression to a number
 * @param expression The expression
 * @returns A number that represents the expression
 * @example
 * toNumber(100) // 100
 * toNumber(true) // 1
 * toNumber([1,2,3]) // 3
 * toNumber("hola") // 4
 * toNumber({name:"Juan", age:12, length:168}) // 168
 */
export declare const toNumber: (expression: withLength) => number;
//# sourceMappingURL=toNumber.d.ts.map