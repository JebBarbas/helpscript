import type { NormalizeRange } from "./types"; 
import HelscriptError from "./HelpscriptError";
import getDx from "./getDx";

/** Normalizes a number between a given range and a condition 
 * - '()' excludes both numbers in the range.
 * - '(]' excludes minimum and includes maximum.
 * - '[)' includes minimum and excludes maximum.
 * - '[]' includes both numbers in the range.
*/
export default function normalize(value:number, range:[number, number], condition:NormalizeRange):number {    
    if(typeof(value) === 'bigint'){
        throw new HelscriptError(`Error in function 'normalize', this function actually doesn't support bignints`)
    }

    if(typeof(value) !== 'number'){
        throw new HelscriptError(`Error in function 'normalize', value is not a number`)
    }

    range.forEach((maybeNumber, index) => {
        const type = typeof(maybeNumber)
        if(type !== 'number'){
            throw new HelscriptError(`Error in function 'normalize', not all values in range
            are numbers (found type '${type}' in position '${index}')`)
        }
    })

    switch(condition){
        case '()':
            if(value <= range[0]) return range[0] + getDx(range[0])
            if(value >= range[1]) return range[1] - getDx(range[1])
            return value

        case '(]':
            if(value <= range[0]) return range[0] + getDx(range[0])
            if(value >= range[1]) return range[1]
            return value

        case '[)':
            if(value <= range[0]) return range[0]
            if(value >= range[1]) return range[1] - getDx(range[1])
            return value

        default:
            if(value <= range[0]) return range[0]
            if(value >= range[1]) return range[1]
            return value
    }
}