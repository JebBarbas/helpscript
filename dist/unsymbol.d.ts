/**
 * Unsymbols the text with an escaped string
 * @param text The text with symbols
 * @param literal If true then the symbols are converted as literal EX: if literal is true "&" will be "Ampersand" and if is false, will be "And"
 * @param extensions An object used if you want to rewrite or add symbol support
 * @returns The text but without symbols
 * @example
 * unsymbol('Red + Blue') // Red Plus Blue
 * unsymbol('me & you', true) // me Ampersand you
 * unsymbol('5!',false,{'!':'Factorial','5':'Cinco'}) // CincoFactorial
 */
export declare const unsymbol: (text: string, literal?: boolean | undefined, extensions?: Record<string, unknown> | undefined) => string;
//# sourceMappingURL=unsymbol.d.ts.map