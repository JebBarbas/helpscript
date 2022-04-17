export type NormalizeRange = '()' | '[]' | '(]' | '[)'

export interface CleanOptions {
    trim: boolean,
    lowercase: boolean,
    normalize: boolean
}

export interface NowObject {
    date: Date,
    time: number
}