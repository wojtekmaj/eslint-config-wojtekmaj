import globals from 'globals';

/**
 * @typedef {import('../types.js').Config} Config
 */

/** @type {Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
    },
  },
];
