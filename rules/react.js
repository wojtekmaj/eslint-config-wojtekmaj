module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-unused-prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
