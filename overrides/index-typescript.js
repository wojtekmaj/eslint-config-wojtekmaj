/**
 * @typedef {import('../types.js').Config} Config
 */

/** @type {Config[]} */
export default [
  // 'plugin:@typescript-eslint/eslint-recommended',
  // 'plugin:@typescript-eslint/recommended',
  // 'plugin:@typescript-eslint/stylistic',
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      // parser: '@typescript-eslint/parser',
    },
    rules: {
      /*
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      */
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
    },
    settings: {
      'import/resolver': { typescript: {} },
    },
  },
  {
    files: ['*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
];
