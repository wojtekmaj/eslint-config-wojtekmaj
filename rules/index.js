/**
 * @typedef {import('../types.js').Config} Config
 */

/** @type {Config[]} */
export default [
  // 'eslint:recommended',
  // 'plugin:eslint-plugin-import/recommended'
  {
    rules: {
      /*
      'import/no-named-as-default': 'off',
      'import/no-unresolved': ['error', { ignore: ['^virtual:'] }],
      */
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'warn',
      'no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
        },
      ],
      'no-use-before-define': 'error',
      'valid-typeof': [
        'error',
        {
          requireStringLiterals: true,
        },
      ],
    },
    settings: {
      'import/ignore': ['node_modules'],
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: [
      'vite.config.js',
      'vite.config.ts',
      'vitest.config.js',
      'vitest.config.ts',
      'webpack.config.js',
      'webpack.config.ts',
    ],
    rules: {
      'no-console': 'off',
    },
  },
  // Vitest uses ESM exports, which are not supported by eslint-plugin-import.
  {
    files: ['vitest.config.js', 'vitest.config.ts'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
];
