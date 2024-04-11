const merge = require('./utils/merge.cjs');
const detectJest = require('./utils/detect-jest.cjs');

/** @typedef {import('./types.cjs').Config} Config */

/** @type {Config} */
const rules = merge(
  ...[require('./index-legacy.cjs'), require('./rules/browser.cjs'), require('./rules/react.cjs')],
);

if (detectJest()) {
  const { overrides = [] } = rules;

  rules.overrides = overrides.concat(require('./overrides/react-jest.cjs'));
}

module.exports = rules;
