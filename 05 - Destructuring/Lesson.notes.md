# Destructuring

## Definition

It allows to extract properties out from an object into their own variable.

## Syntax

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
