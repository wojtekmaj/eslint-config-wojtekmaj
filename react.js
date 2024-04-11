const merge = require('./utils/merge');
const detectJest = require('./utils/detect-jest');

/** @typedef {import('./types').Config} Config */

/** @type {Config} */
const rules = merge(...[require('./index'), require('./rules/browser'), require('./rules/react')]);

if (detectJest()) {
  const { overrides = [] } = rules;

  rules.overrides = overrides.concat(require('./overrides/react-jest'));
}

module.exports = rules;
