import { areEmptyStrings } from '../src'

test('areEmptyStrings', () => {
    expect(areEmptyStrings('email@email.com','coolPassword01','coolPassword01')).toBe(false)
    expect(areEmptyStrings('new cool name', '', 'new@email.com')).toBe(true)
    expect(areEmptyStrings(String(100))).toBe(false)
    expect(areEmptyStrings('','','')).toBe(true)
})