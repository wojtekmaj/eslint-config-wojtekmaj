const requireResolveCwd = require('../utils/require-resolve-cwd.cjs');

/** @typedef {import('../types.cjs').Config} Config */

/** @type {Exclude<Config['overrides'], undefined>} */
const overrides = [
  {
    files: ['*.ts', '*.tsx'],
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/stylistic',
    ],
    parser: requireResolveCwd('@typescript-eslint/parser'),
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
    },
  },
  {
    files: ['*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
];

module.exports = overrides;
