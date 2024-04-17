import { FlatCompat } from '@eslint/eslintrc';

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import type { FlatConfig } from '../types.js';

const compat = new FlatCompat({});

const config: FlatConfig[] = [
  ...compat.extends(
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ),
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'react/jsx-no-leaked-render': 'error',
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
  },
];

export default config;
