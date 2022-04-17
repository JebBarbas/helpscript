import HelscriptError from "./HelpscriptError"

/** Returns an array of numbers by the given values 
 * (works like the range python function)
*/
export default function range(start:number, end?:number, step?:number):number[]{
    if(typeof(start) !== 'number'){
        throw new HelscriptError(`Error in function 'range', 'start' is not a number`)
    }

    if(end && typeof(end) !== 'number'){
        throw new HelscriptError(`Error in function 'range', 'end' is not a number`)
    }

    if(step && typeof(step) !== 'number'){
        throw new HelscriptError(`Error in function 'range', 'end' is not a number`)
    }

    const innerStart = typeof(end) === 'undefined' ? 0 : start
    const innerEnd = typeof(end) === 'undefined' ? start : end
    const delta = innerEnd - innerStart

    const innerStep = typeof(step) === 'undefined' ? Math.sign(delta) : step

    if(innerStep === 0){
        throw new HelscriptError(`Error in function 'range', the 'step' can't be 0`)
    }

    // Checks that the increment has the same sign as the subtraction
    // (if is a decreasing list, then the step must be decreasing)
    if(Math.sign(delta) !== Math.sign(innerStep)){
        throw new HelscriptError(`Error in function 'range', the 'step' has a sign that will make
        the list never end`)
    }

    const innerRange:number[] = []

    if(delta > 0){
        for(let i = innerStart; i < innerEnd; i += innerStep){
            innerRange.push(i)
        }
    }
    else{
        for(let i = innerStart; i > innerEnd; i += innerStep){
            innerRange.push(i)
        }
    }

    return innerRange
}