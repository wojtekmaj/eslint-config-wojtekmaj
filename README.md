[![CI](https://github.com/wojtekmaj/eslint-config-wojtekmaj/workflows/CI/badge.svg)](https://github.com/wojtekmaj/eslint-config-wojtekmaj/actions)

# eslint-config-wojtekmaj

Set of default, recommended rules from:

- ESLint itself,
- `eslint-plugin-import`,
- `eslint-plugin-jsx-a11y`,
- `eslint-plugin-react`,
- `eslint-plugin-react-hooks`

with a few enhancements:

- All required plugins are marked as `dependencies`, not `peerDependencies`, so you don't need to install them manually.
  Note: Since ESLint 8.0.0, it will work just fine with Yarn PnP.
- Files matching `**/*.spec.js`, `**/*.spec.jsx`, `**/*.spec.ts`, `**/*.spec.tsx`, `**/__tests__/*` patterns automatically detect `jest` environment, so you can use `test`, `describe`, `it`, `expect` globals.
- Certain rules were overwritten (details below).
- React flavor assumes JSX automatic runtime is turned on.

This config is designed to be run alongside Prettier.

## Flavors

`eslint-config-wojtekmaj` comes in several flavors:

- Basic - `wojtekmaj`
- Node.js - `wojtekmaj/node` - Basic flavor + Node.js-specific rules.
- Browser - `wojtekmaj/browser` - Basic flavor + Browser-specific rules.
- React - `wojtekmaj/react` - Browser flavor + React-specific rules.
- React (no automatic runtime) - `wojtekmaj/react-no-automatic-runtime` - Browser flavor + React-specific rules, for legacy projects with automatic runtime disabled.

## Overwritten/added rules

### Basic flavor

- `@typescript-eslint/no-unused-vars`: `ignoreRestSiblings` flag set to `true`.
- `@typescript-eslint/no-use-before-define`: Set to `"error"`.
- `import/no-named-as-default`: Turned off.
- `no-template-curly-in-string`: Set to `"warn"`.
- `no-unused-vars`: `ignoreRestSiblings` flag set to `true`.
- `no-use-before-define`: Set to `"error"`.
- `valid-typeof`: Set to `"error"`.

### Node.js flavor

None

### Browser flavor

- `no-alert`: Set to `"warn"`.
- `no-console`: Set to `"warn"`, with the exception of files only executed internally e.g. Webpack config files.

### React flavor

- `react/jsx-no-leaked-render`: Set to `"error"`.
- `react/jsx-uses-react`: Turned off (assumes JSX automatic runtime is turned on).
- `react/no-array-index-key`: Set to `"warn"`.
- `react/react-in-jsx-scope`: Turned off (assumes JSX automatic runtime is turned on).
- `react/no-unused-prop-types`: Set to `"error"`.
