const requireResolveCwd = require('../utils/require-resolve-cwd');

module.exports = {
  files: ['*.ts', '*.tsx'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: requireResolveCwd('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint'],
  rules: {
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
};
