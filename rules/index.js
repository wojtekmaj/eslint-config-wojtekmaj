const requireResolveCwd = require('../utils/require-resolve-cwd');

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/no-named-as-default': 'off',
    'no-template-curly-in-string': 'warn',
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: requireResolveCwd('@typescript-eslint/parser'),
      plugins: ['@typescript-eslint'],
    },
    {
      files: ['vite.config.js', 'vite.config.ts', 'webpack.config.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
