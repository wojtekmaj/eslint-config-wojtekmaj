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
      files: ['**/*.spec.js', '**/__tests__/*'],
      env: {
        jest: true,
      },
    },
    {
      files: ['webpack.config.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
