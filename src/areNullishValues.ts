/** Returns true if one or more of the given values is null or undefined */
export default function areNullishValues(...values:unknown[]):boolean {
    return values.some(value => value === undefined || value === null)
}