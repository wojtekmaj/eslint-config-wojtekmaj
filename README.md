[![CI](https://github.com/wojtekmaj/eslint-config-wojtekmaj/workflows/CI/badge.svg)](https://github.com/wojtekmaj/eslint-config-wojtekmaj/actions)

# eslint-config-wojtekmaj

Basically `eslint-config-airbnb`, with a few differences:

* All required plugins are marked as `dependencies`, not `peerDependencies`, so you don't need to install them manually.
* Files matching `**/*.spec.js'`, `**/*.spec.jsx`, `**/__tests__/*` patterns automatically detect `jest` environment, so you can use `test`, `describe`, `it`, `expect` globals.
* Certain rules were overwritten (details below).
* React flavors also inherits rules from `react/recommended` and `react-hooks/recommended`.

## Flavors

`eslint-config-wojtekmaj` comes in 3 flavors:

* Basic - `wojtekmaj`
* Node.js - `wojtekmaj/node` - Basic flavor + Node.js-specific rules.
* React - `wojtekmaj/react` - Basic flavor + React-specific rules.

## Overwritten rules

`eslint-config-wojtekmaj` is based on `eslint-config-airbnb`, with certain rules overwritten:

### Basic flavor

* `import/no-cycle`: Turned off.
* `import/prefer-default-export`: Turned off.
* `no-await-in-loop`: Set to `"warn"`.
* `no-plusplus`: Turned off.

### Node.js flavor

None

### React flavor

* `jsx-a11y/label-has-associated-control`: Changed configuration. Requires id *or* nesting, not id *and* nesting.
* `react/jsx-boolean-value`: Changed configuration. Added exceptions for `defaultValue` and `value` props.
* `react/jsx-props-no-spreading`: Turned off.
* `react/require-default-props`: Turned off.
* `react/sort-prop-types`: Turned on.
* `react/state-in-constructor`: Changed configuration. Set to `"never"`.
