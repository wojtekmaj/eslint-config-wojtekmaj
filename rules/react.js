module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['id', 'nesting'],
        },
      },
    ],
    'react/jsx-boolean-value': [
      'error',
      'never',
      {
        always: ['defaultValue', 'value'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'error',
    'react/state-in-constructor': ['error', 'never'],
  },
  overrides: [
    {
      files: ['**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
