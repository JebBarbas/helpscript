/** Returns true if one or more of the given strings is an empty string (''), useful
 * in required forms that are validated by JavaScript.
 *
 * Note: This function DOESN'T clean the values, so, if you pass a value like
 * '        ', this won't be valued as empty string, if you want to make this, consider
 * using:
 *
 * ```js
 * const { clean, areEmptyStrings } = require('helpscript')
 * areEmptyStrings(...strings.map(clean))
 * ```
 */
export default function areEmptyStrings(...strings: string[]): boolean;
