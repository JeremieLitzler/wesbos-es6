# ES6 Tooling

[< Back to table of content](../README.md) |
[View previous lesson's notes](../13-JavaScript.Modules.and.Using.npm/Lesson.notes.md) |
[View next lesson's notes >](../15-Classes/Lesson.notes.md)

## SystemJS

It is nice to use and showcase the ES6 modules more quickly... or is it?

If we streamline the process to setup with npm, it should take long!

Don't use it in production as it is slow!

## Babel

It transform ES6+ code into ES5 code!

### Do we need to transform all the code ES6+ to ES5

No, you can use `babel-preset-env` and it will run the transpiling rules according to some config.

### Configuration setup

Either:

- use `.babelrc` file
- use a config section in `package.json` below the `dependencies`.

Presets arre a collection of plugins.
But we can use a preset along with a specific plugin.

Then use the docs [@babeljs.io](https://babeljs.io/).

### Limitations of Babel

It works on syntax, not on available functionality.

## Polyfilling

It allows to implement ES features that don't work in some browsers.

[Polyfill.io](https://polyfill.io/v3/url-builder/) is a great resource because it serves a JS file containing all the polyfills the client's browser needs!
