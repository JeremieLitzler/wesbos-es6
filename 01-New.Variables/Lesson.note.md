# Variables

[< Back to table of content](../README.md) |
[View next lesson's notes >](../02-Arrow.functions/Lesson.note.md)

## What are the possible scopes?

- window
- function
- block (ex: if statement)

- `var` scopes in the function or the entire window.
- `let` and `const` are scoped in the block they below in.

## Scope of let and const

Consequently, in the following snippet, the two winner variables are in a different scope and therefore they are not the same.

- the first is scoped in the window
- the second is scoped in the if statement.

```js
let points = 50;
let winner = false;

if (points > 40) {
  let winner = true;
}
```

## Const assignment

A const variable can't be reassigned **but** you can update the properties of a const object.

## Temporal Dead Zone

It is when an error is thrown when you try to access a let and a const variable before it is declared.

## When to use var, let and const

It depends on your preferences but the leading point of view:

- [from Mathias Bynens](https://mathiasbynens.be/notes/es6-const)

> - Use const by default
> - Use let only if rebinding is needed.
> - var should not be ever used in ES6.

- from Kyle Simpson :

> - Use var for top-level variables that are shared across many (especially larger) scopes.
> - Use let for localized variables in smaller scopes.
> - Refactor let to const only after some code has to be written, and you're reasonably sure that you've got a case where there shouldn't be variable reassignment.
