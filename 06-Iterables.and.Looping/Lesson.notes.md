# Iterables & Looping

[< Back to table of content](../README.md) |
[View previous lesson's notes](../05-Destructuring/Lesson.notes.md) |
[View next lesson's notes >](../07-An.Array.of.Improvements/Lesson.notes.md)

## for...of

### Why a new loop

- The regular for loop is confusing and hard to read...
- The forEach doesn't allow to break or continue...
- The for...in allow to iterate over the possible addition to the Prototype object!

`for...of` is the best of the 3 solutions above.
It can handle pretty much any array, **except objet**.
To handle object properties, you need to use `Object.keys` or `Object.entries` depending on what you need to be.

### What about the index of each value

```js
const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];
for (const [i, cut] of cuts.entries()) {
  console.log(`Index of ${cut} is ${i}`);
}
```

### What about objects

You can get the keys of the object using `Object.keys` method.
But using a `for...in` works too.
