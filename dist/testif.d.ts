import { withLength } from "./toNumber";
export declare type operator = '<' | '<=' | '>' | '>=' | '==' | '!=';
export declare type validType = withLength;
/**
 * Testes two expressions with one operator
 * @param expressionOne First expression
 * @param operator One operator like '<' | '<=' | '>' | '>=' | '==' | '!='
 * @param expressionTwo Seconds expression (two expressions must be the same type)
 * @returns A boolean
 * @example
 * testif("hello", "<", "helloworld") // true
 * testif([1,2,3,4,5], ">", [1,2]) // true
 *
 * class Person {
 *   constructor(age){
 *     this.length = age
 *   }
 * }
 *
 * let person1 = new Person(10)
 * let person2 = new Person(12)
 *
 * testif(person1, ">", person2) // false
 */
export declare const testif: (expressionOne: validType, operator: operator, expressionTwo: validType) => boolean;
//# sourceMappingURL=testif.d.ts.map