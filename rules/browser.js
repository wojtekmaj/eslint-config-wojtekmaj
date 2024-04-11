import globals from 'globals';

/**
 * @typedef {import('../types.js').Config} Config
 */

/** @type {Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-alert': 'warn',
      'no-console': 'warn',
    },
  },
];
