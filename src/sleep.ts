/**
 * Stops the program for ms miliseconds
 * @param ms The miliseconds that the program is going to be stopped
 * @example
 * sleep(1000) // sleeps 1 second
 */
export const sleep = (ms:number):void => {
    const date = Date.now()
    let currentDate = null
    do {
      currentDate = Date.now()
    } while (currentDate - date < ms)
}