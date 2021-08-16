"use strict";
exports.__esModule = true;
exports.testif = void 0;
var type_1 = require("./type");
var toNumber_1 = require("./toNumber");
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
var testif = function (expressionOne, operator, expressionTwo) {
    var type1 = type_1.type(expressionOne);
    var type2 = type_1.type(expressionTwo);
    if (type1 !== type2) {
        throw new Error("expressionOne<" + type1 + "> and expressionTwo<" + type2 + "> must be of the same type");
    }
    return eval("" + toNumber_1.toNumber(expressionOne) + operator + toNumber_1.toNumber(expressionTwo));
};
exports.testif = testif;
//# sourceMappingURL=testif.js.map