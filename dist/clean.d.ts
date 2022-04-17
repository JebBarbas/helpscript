import { CleanOptions } from "./types";
/** Cleans a string, triming it, lowercasing it ans normalizing it, useful to make searchs
 * when you want to match for example "El Día Del Niño" with "el dia del nino".
 *
 * Clean makes 3 things, trims the text, lowercases, and normalizes, if you dont want
 * to make some of this, use the second parameter options.
 *
 * ```js
 * clean('   My String', {lowercase:false}) // 'My String'
 * ```
 */
export default function clean(text: string, options?: Partial<CleanOptions>): string;
