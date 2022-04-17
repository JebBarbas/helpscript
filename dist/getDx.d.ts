/** Gets the minimum number that makes a difference in the value
 *
 * For example, if you add 3 + 1e-20 is still 3, but 3 + 1e-15 makes a difference
 * , but 100 + 1e-15 is still 100, and you need 1e-14 to make a difference.
 *
 * When the value goes up, it also does the dx.
*/
export default function getDx(x: number): number;
