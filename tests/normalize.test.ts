import { normalize } from "../src";

test('normalize max', () => {
    expect(normalize(101, '(',0,100,')')).toBe(100 - Number.MIN_VALUE)
    expect(normalize(101, '[',0,100,')')).toBe(100 - Number.MIN_VALUE)
    expect(normalize(101, '(',0,100,']')).toBe(100)
    expect(normalize(101, '[',0,100,']')).toBe(100)
})

test('normalize min', () => {
    expect(normalize(-1, '(',0,100,')')).toBe(0 + Number.MIN_VALUE)
    expect(normalize(-1, '[',0,100,')')).toBe(0)
    expect(normalize(-1, '(',0,100,']')).toBe(0 + Number.MIN_VALUE)
    expect(normalize(-1, '[',0,100,']')).toBe(0)
})

test('normalize between', () => {
    expect(normalize(50, '(',0,100,')')).toBe(50)
    expect(normalize(1, '[',0,100,')')).toBe(1)
    expect(normalize(98, '(',0,100,']')).toBe(98)
    expect(normalize(45.8, '[',0,100,']')).toBe(45.8)
})