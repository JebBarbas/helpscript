import { clean } from "../src";

test('clean', () => {
    expect(clean('El día del NiÑo          ')).toBe('el dia del nino')
    expect(clean('          ññÑñÑ')).toBe('nnnnn')
    expect(clean('cuantos años tenías')).toBe('cuantos anos tenias')
    expect(clean('                      ')).toBe('')
})