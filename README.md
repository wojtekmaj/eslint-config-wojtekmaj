[![npm](https://img.shields.io/npm/v/eslint-config-wojtekmaj.svg)](https://www.npmjs.com/package/eslint-config-wojtekmaj) ![downloads](https://img.shields.io/npm/dt/eslint-config-wojtekmaj.svg) [![CI](https://github.com/wojtekmaj/eslint-config-wojtekmaj/actions/workflows/ci.yml/badge.svg)](https://github.com/wojtekmaj/eslint-config-wojtekmaj/actions)

# eslint-config-wojtekmaj

Set of default, recommended rules from:

- ESLint itself,
- `@typescript-eslint`
- `eslint-plugin-import`,
- `eslint-plugin-jsx-a11y`,
- `eslint-plugin-react`,
- `eslint-plugin-react-hooks`

with a few changes and enhancements:

- **Out-of-the-box TypeScript support**: `@typescript-eslint/parser` will parse your TypeScript files.
- **No need to install any plugins manually**: All required plugins and parsers are automatically installed so you don't need to install them on your own.
- Certain rules were overwritten (details below).
- Certain rules from `eslint-plugin-import` were turned off in TypeScript files, as they are already covered by TypeScript itself.
- React flavor assumes JSX automatic runtime is turned on.
- Better support for `vite-plugin-pwa` and other Vite plugins using `virtual:*` imports.

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

- `@typescript-eslint/consistent-type-definitions`: Changed to prefer types over interfaces.
- `@typescript-eslint/no-unused-vars`: `ignoreRestSiblings` flag set to `true`.
- `@typescript-eslint/no-use-before-define`: Set to `"error"`.
- `import/no-named-as-default`: Turned off.
- `import/no-unresolved`: Kept at `"error"`, but ignoring `virtual:*` imports.
- `no-self-compare``: Set to `"error"`.
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

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/5426427?v=4&s=128" width="64" height="64" alt="Wojciech Maj">
    </td>
    <td>
      <a href="https://github.com/wojtekmaj">Wojciech Maj</a>
    </td>
  </tr>
</table>
