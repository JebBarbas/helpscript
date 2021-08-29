import * as hs from '.'

test('escapeNumbers()',()=>{
    expect(hs.escapeNumbers('80 years')).toBe('eighty years')
    expect(hs.escapeNumbers('5 Dollars', true)).toBe('Five Dollars')

    expect(hs.escapeNumbers('1 2 3')).toBe('one two three')
})

test('numberName()', () => {
    expect(hs.numberName(5)).toBe('five')
    expect(hs.numberName(10,true)).toBe('Ten')
})

test('repeat()', () => {
    let num = 0
    const addOne = () => {++num}

    hs.repeat(addOne,5,100)
    expect(num).toBe(5)
})

test('repeatAsync()', async () => {
    let num = 0
    const addOne = () => {++num}

    await hs.repeat(addOne, 10,100)
    expect(num).toBe(10)
})

test('sleep()', () => {
    expect(hs.sleep(2500)).toBe(undefined)
})

test('sleepAsync()',async ()=>{
    expect(await hs.sleepAsync(2500)).toBe(undefined)
})

test('testif()',()=>{
    expect(hs.testif('hello','<','helloworld')).toBe(true)
    expect(hs.testif([1,2,3,4,5],'>',[1,2])).toBe(true)

    expect(hs.testif({length:10},'!=',{length:10})).toBe(false)
})

test('toBoolean()',()=>{
    expect(hs.toBoolean([])).toBe(true)
    expect(hs.toBoolean(0)).toBe(false)
    expect(hs.toBoolean("")).toBe(false)

    expect(hs.toBoolean([1].length)).toBe(true)
})

test('toNumber()',()=>{
    class Person {
        name = ''
        age = 0
        length = 0
        constructor(name:string, age:number){
            this.name = name
            this.age = age
            this.length = age
        }
    }

    expect(hs.toNumber(100)).toBe(100)
    expect(hs.toNumber(true)).toBe(1)
    expect(hs.toNumber([1,2,3])).toBe(3)
    expect(hs.toNumber("hola")).toBe(4)
    expect(hs.toNumber(new Person('Pedro',12))).toBe(12)

    expect(hs.toNumber(new Person('Juan', 69))).toBe(69)
})

test('type()', () => {
    expect(hs.type('hola')).toBe('string')

    expect(hs.type(4)).toBe('number')
    expect(hs.type(undefined)).toBe('undefined')
})

test('unsymbol()', () => {
    expect(hs.unsymbol('Red + Blue')).toBe('Red Plus Blue')
    expect(hs.unsymbol('me & you', true)).toBe('me Ampersand you')
    expect(hs.unsymbol('5!',false,{'!':'Factorial','5':'Cinco'})).toBe('CincoFactorial')

    expect(hs.unsymbol('Hot & Cold')).toBe('Hot And Cold')
})

test('variablelify()',() => {
    expect(hs.variablelify("10 Dollars + 50 Shades (Plus)")).toBe("tenDollarsPlusFiftyShadesPlus")

    expect(hs.variablelify("Red & Blue 4 ever")).toBe('redAndBlueFourEver')
})