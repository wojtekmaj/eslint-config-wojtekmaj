module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  rules: {
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'no-await-in-loop': 'warn',
    'no-plusplus': 'off',
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
