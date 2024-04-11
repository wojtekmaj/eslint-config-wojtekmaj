/** @typedef {import('../types').Config} Config */

/** @type {Config} */
const config = {
  env: {
    browser: true,
  },
  rules: {
    'no-alert': 'warn',
    'no-console': 'warn',
  },
};

module.exports = config;
