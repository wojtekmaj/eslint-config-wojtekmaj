import reactRules from './react.js';

/**
 * @typedef {import('../types.js').Config} Config
 */

/** @type {Config[]} */
export default [
  ...reactRules,
  {
    rules: {
      'react/jsx-uses-react': 'error',
      'react/react-in-jsx-scope': 'error',
    },
  },
];
