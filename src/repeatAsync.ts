/* eslint-disable @typescript-eslint/ban-types */
import { sleepAsync } from './sleepAsync'

/**
 * 
 * @param callback The functions that is going to be repeated times times
 * @param times The times that the callback function is going to be repeated
 * @param time (Optional) The time to wait between each execution in miliseconds (default is 0)
 * @example
 * main = async () => {
 *  console.time()
 *  await repeatAsync(()=>console.log('Hola'),10,1000) // Logs 'Hola' 10 times with 1 second of difference
 *  console.timeEnd() // 10 segs
 * }
 * main()
 */
export const repeatAsync = async (callback:Function, times:number, time?:number):Promise<void> => {
    const localTime = time || 0
    for(let i = 0; i < times; i++){
        if(i != 0) await sleepAsync(localTime)
        callback()
    }
}