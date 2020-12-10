# Destructuring

## Definition

It allows to extract properties out from an object into their own variable.

## Syntax for objects

The basic syntax is:

```js
const { var1, var2 } = object; //object must contain properties `var1` and `var2`
```

The syntax with a deeply nested object:

```js
const { var1, var2 } = object.deep.nested.subobject; //object must contain properties `var1` and `var2`
```

The syntax when we don't want to take the original property names:

```js
const { var1: newVar1, var2: newVar2 } = object; //object must contain properties `var1` and `var2`
```

Finally, here is the default setting syntax:

## Syntax for arrays

It is using the square brakets `[var1, var2, var3]`.

The spread operator is useful when you grab some values of the array explicitly but the rest of the values can be retrieved into a sub array:

```js
const team = ["Wes", "Harry", "Sarah", "Keegan", "Riker"];

const [captain, assistant, ...players] = team; //players is an array equal to ['Sarah', 'Keegan', 'Riker']
```

## Destructuring helps swapping variables and more

[See 05 - Destructuring/destructuring-in-action.html](05%20-%20Destructuring/destructuring-in-action.html)
