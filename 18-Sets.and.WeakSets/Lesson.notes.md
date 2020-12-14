# Sets and WeakSets

## Set

The 2 differences with an array are:

- that the values are unique.
- that the set of values is not indexed based.

[See MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

Using the method `values` creates a generator and it can also be iterated over.

BTW, `values()` is an alias of `keys()`.

See also [`entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries) to get the key/value pairs.

## What is the difference between Set and WeakSet

It is like a Set but a few (sometimes useful) limitations:

- each value can only be an object,
- consequently, you can't iterator over the values,
- a deleted value is grabadge-collected.

When is it useful?

[Have a read here](https://blog.bitsrc.io/understanding-weaksets-in-javascript-6a32b1abae0e).
