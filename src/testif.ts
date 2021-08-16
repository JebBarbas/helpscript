import { type } from './type'
import { toNumber, withLength } from "./toNumber"

export type operator = '<' | '<=' | '>' | '>=' | '==' | '!='
export type validType = withLength

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
export const testif = (expressionOne:validType, operator:operator , expressionTwo:validType):boolean => {
    const type1 = type(expressionOne)
    const type2 = type(expressionTwo)
    
    if(type1 !== type2){
        throw new Error(`expressionOne<${type1}> and expressionTwo<${type2}> must be of the same type`)
    }

    return eval(`${toNumber(expressionOne)}${operator}${toNumber(expressionTwo)}`)
}