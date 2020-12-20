# JavaScript Modules and Using npm

[< Back to table of content](../README.md) |
[View previous lesson's notes](../12-Code.Quality.with.ESLint/Lesson.notes.md) |
[View next lesson's notes >](../14-ES6.Tooling/Lesson.notes.md)

## Introduction `npm`

I have been using `npm` for a while.

Here is what I learned or was reminded of:

- `--save` is to save a dependency that the app uses.
- `--save-dev` is to save a dependency that is a tool for the project.

## Exporting custom modules

Using `export default myModule` allows us to name it whatever we want when we import the module.

```js
import myAwesomeModule from './src/myModule';
```

However, using a named export doesn't allow that.

```js
//named export
export const myModule = {};
```

Therefore the import must be:

```js
import { myModule } from './src/myModule';
```

## Don't mix and match export and import

If default export, import with no `{...}`
If named export, import with `{...}`.
