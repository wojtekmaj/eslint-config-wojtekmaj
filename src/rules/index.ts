import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import importPlugin from 'eslint-plugin-import-x';

export default tseslint.config(
  eslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: { import: importPlugin },
    rules: {
      /**
       * The following rules are only enabled for .js and .jsx files, since TypeScript files are
       * already checked by the TypeScript compiler.
       * - import/default (replaced by TS1192)
       * - import/export (TS2528)
       * - import/named (TS2305)
       * - import/namespace (TS2339)
       * - import/no-named-as-default-member (TS2339)
       * - import/no-unresolved (TS2307)
       */
      'import/no-duplicates': 'warn',
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
    files: ['**/*.js', '**/*.jsx'],
    plugins: { import: importPlugin },
    rules: {
      /**
       * Equivalent to plugin:import/recommended, but without parserOptions override, and with
       * better support for `vite-plugin-pwa` and other Vite plugins using `virtual:*` imports.
       */
      'import/default': 'error',
      'import/export': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/no-named-as-default-member': 'warn',
      'import/no-unresolved': ['error', { ignore: ['^virtual:'] }],
      'import/no-named-as-default': 'warn',
      'import/no-duplicates': 'warn',
    },
  },
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    files: ['*.ts', '*.tsx'],
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
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
  {
    files: ['*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
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
);
