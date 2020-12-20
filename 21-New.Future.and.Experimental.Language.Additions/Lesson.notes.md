# New Future and Experimental Language Additions

[< Back to table of content](../README.md) |
[View previous lesson's notes](../20-Async.plus.Await/Lesson.notes.md) |

## Class properties (aka Class Fields)

As the time of the recording, it wasn't official but the React community was using it heavily.

See [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/Class_fields).

## `padStart` et `padEnd`

See MDN for [padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) and [padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

## Exponential operator

Instead of

```js
const result = Math.pow(Math.pow(2, 2), 2); //equals 16
```

in ES7, you can write simply:

```js
const result = 2 ** (2 ** 2); //equals 16
```

## Trailing comma

Basically, to avoid the "forgotten commat", you always now a trailing comma on the last value of an array or property of an object.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation).

## `Object.entries` and `Object.values`

Both enables you iterate over the content of an object using [a for..of loop](../06-Iterables.and.Looping/Lesson.notes.md)
