import { areFalsyValues } from "../src";

test('areFalsyValues', () => {
    expect(areFalsyValues('coolName', 100, true, [])).toBe(false)
    expect(areFalsyValues('', true, {}, 2)).toBe(true)
    expect(areFalsyValues('string', undefined)).toBe(true)
    expect(areFalsyValues('0')).toBe(false)
})