import type { NormalizeRange } from "./types";
/** Normalizes a number between a given range and a condition
 * - '()' excludes both numbers in the range.
 * - '(]' excludes minimum and includes maximum.
 * - '[)' includes minimum and excludes maximum.
 * - '[]' includes both numbers in the range.
*/
export default function normalize(value: number, range: [number, number], condition: NormalizeRange): number;
