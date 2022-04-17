import { areNullishValues } from "../src";

test('areNullishValues', () => {
    expect(areNullishValues('', 0, NaN, 0n, false)).toBe(false)
    expect(areNullishValues('Yes', true, 100, null)).toBe(true)
    expect(areNullishValues(undefined)).toBe(true)
})