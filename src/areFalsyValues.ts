/** Returns true if one or more of the given values is falsy
 * Falsy Values: 0, 0n, null, undefined, false, NaN or '' (empty string) */
export default function areFalsyValues(...values:unknown[]):boolean {
    return values.some(value => !value)
}