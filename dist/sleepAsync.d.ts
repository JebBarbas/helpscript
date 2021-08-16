/**
 * Returns a promise that is going to be resolved in ms miliseconds
 * @param ms The miliseconds when the promise is going to be resolved
 * @returns A promise resolved in ms miliseconds
 * @example
 * const main = async () => {
 *     console.log('Log 1')
 *     await sleepAsync(2000)
 *     console.log('Log 2')
 * }
 * main()
 *
 * // OR
 *
 * console.log('Log 1')
 * sleepAsync(2000).then(()=>{
 *     console.log('Log 2')
 * })
 */
export declare const sleepAsync: (ms: number) => Promise<void>;
//# sourceMappingURL=sleepAsync.d.ts.map