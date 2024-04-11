import globals from 'globals';

/**
 * @typedef {import('../types.js').Config} Config
 */

/** @type {Config[]} */
export default [
  {
    files: ['**/*.spec.js', '**/*.spec.jsx', '**/*.spec.ts', '**/*.spec.tsx', '**/__tests__/*'],
    languageOptions: {
      globals: globals.jest,
    },
  },
];
