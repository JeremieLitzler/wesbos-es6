# Object Literal Upgrades

[< Back to table of content](../README.md) |
[View previous lesson's notes](../08-Say.Hello.to...Spread.and...Rest/Lesson.notes.md) |
[View next lesson's notes >](../10-Promises/Lesson.notes.md)

## Property name simplification

## Function declaration

Before:

```js
const modal = {
  create: function(selector) {},
  open: function((content) {},
  close: function((goodbye) {},
};
```

After:

```js
const modal = {
  create(selector) {},
  open(content) {},
  close(goodbye) {},
};
```

**This is why we don't need to use an arrow function on an object literal.**

## Computed property names

It is not used very often... [See example](09%20-%20Object%20Literal%20/object-literal-upgrades.html)
