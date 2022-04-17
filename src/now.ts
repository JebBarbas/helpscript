import { NowObject } from "./types"

/** Gets the date and milisecond of this moment (in UTC) */
export default function now():NowObject{
    const nowDate = new Date()
    return {
        date: nowDate,
        time: nowDate.getTime()
    }
}