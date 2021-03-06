# Helpscript

I made this module to help me to make some functions in my projects but you can use it if you want.

NOTE: Since version v2.0.0 I deleted all the previous functions an added new of them, so, if you're looking
for a function that was in a previous version, it won't be in this one, sorry.

## Instalation

`npm i helpscript`

## Use

Import the function that you need and use it, see down below what functions are available.

```js
const {someFunction} = require('helpscript')
// Or if your project uses import-export:
// import { someFunction } from 'helpscript'

console.log(someFunction())
```

## Functions

### areEmptyStrings

Returns true if one or more of the given strings is an empty string (''), useful
in required forms that are validated by JavaScript.

```js
const { areEmptyStrings } = require('helpscript')

if(areEmptyStrings(email, password, confirmPassword)){
    handleError()
}

// Now you know this aren't empty strings
makeSomething(email, password, confirmPassword)
```

Note: This function DOESN'T clean the values, so, if you pass a value like
'        ', this won't be valued as empty string, if you want to make this, consider
using:

```js
const { clean, areEmptyStrings } = require('helpscript')
areEmptyStrings(...[email, password, confirmPassword].map(clean))
```

### areEmptyValues

Returns true if one or more of the given values is falsy.

Falsy Values: 0, 0n, null, undefined, false, NaN or '' (empty string).

### areNullishValues

Returns true if one or more of the given values is null or undefined.

### clean

Cleans a string, triming it, lowercasing it ans normalizing it, useful to make searchs
when you want to match for example "El Día Del Niño" with "el dia del nino".

```js
const { clean } = require('helpscript')

clean('searCH From ínPut        ') // 'search from input'
```

Clean makes 3 things, trims the text, lowercases, and normalizes, if you dont want
to make some of this, use the second parameter options.

```js
clean('   My String', {lowercase:false}) // 'My String'
```

### getDx

Gets the minimum number that makes a difference in the value
 
For example, if you add 3 + 1e-20 is still 3, but 3 + 1e-15 makes a difference
but 100 + 1e-15 is still 100, and you need 1e-14 to make a difference.

When the value goes up, it also does the dx.

### normalize

Normalizes a number between a given range and a condition 

- '()' excludes both numbers in the range.
- '(]' excludes minimum and includes maximum.
- '[)' includes minimum and excludes maximum.
- '[]' includes both numbers in the range.

```js
const { normalize } = require('helpscript')

// Example, normalizing a grade
normalize(11.3, [5, 10], '[]') // 10
```

### now

Gets the date and milisecond of this moment (in UTC).

```js
const { now } = require('helpscript')

const person = {
    name: 'John',
    lastname: 'Doe',
    created: now().time // The miliseconds are used
}

console.log('Now date is:', now().date) // The Date object is used
```

### range

Returns an array of numbers by the given values 
(works like the range python function)

```js
const { range } = require('helpscript')

range(5) // [0, 1, 2, 3, 4]
range(1, 6) // [1, 2, 3, 4, 5]
range(10, 20, 2) // [10, 12, 14, 16, 18]
```

An useful use can be for example if you want to make something n times and you are
very lazy to make a for-loop.

```js
const { range } = require('helpscript')

range(1, n + 1).forEach(value => {
    console.log('Hello', value)
})
```