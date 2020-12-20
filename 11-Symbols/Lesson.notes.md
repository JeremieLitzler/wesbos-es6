# Symbol

[< Back to table of content](../README.md) |
[View previous lesson's notes](../10-Promises/Lesson.notes.md) |
[View next lesson's notes >](../12-Code.Quality.with.ESLint/Lesson.notes.md)

## Definition

They are unique identifier to avoid naming collision.

```js
const mySymbol = Symbol('descriptor');
```

## When do you use it

If using a lot of data, it is important to identify uniquely the data. See the example below to identify the Olivia:

```js
const classRoom = {
  [Symbol('Mark')]: { grade: 50, gender: 'male' },
  [Symbol('olivia')]: { grade: 80, gender: 'female' },
  [Symbol('olivia')]: { grade: 80, gender: 'female' },
};
```

## How to access the data

```js
//retrieve the object keys
const syms = Object.getOwnPropertySymbols(classRoom);
//get the data for each symbol
const data = syms.map((sym) => classRoom[sym]);
```
