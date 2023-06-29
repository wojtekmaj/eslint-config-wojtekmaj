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
  overrides: [
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
  ],
};
