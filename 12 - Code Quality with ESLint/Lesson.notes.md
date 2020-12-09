# ESLint

## Prerequisites

- Have NodeJS
- Have npm
- Run `npm init` on your target folder.

## Install `eslint`

Globally:

- `npm install -g eslint`

## Running it

`eslint --version` should output the version:

> v7.15.0

## Configuring

### Use AirBnb strict rules

- Install the preset: `npx install-peerdeps --dev eslint-config-airbnb`
- Run eslint

## Notes when using Visual Studio Code and extension `Prettier`

You will need:

- to set `Trailing Comma` to `all`
- to check `Single Quote`

Otherwise, you will see:

> error Strings must use singlequote
> error Missing trailing comma comma-dangle

## Disabling false-positive per file or per line of code

You can do it through comment like this:

```js
/* eslint-disable */
/* eslint-disable no-extend-native */
```

- To disable on a file, set the disable comment at the top.
- To disable on a line, set the disable comment just before the target line.
- **Don't forget to re-enable eslint with `/* eslint-enable */`.**
