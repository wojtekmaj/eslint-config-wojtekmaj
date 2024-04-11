const merge = require('./utils/merge.js');
const detectJest = require('./utils/detect-jest.js');

/** @typedef {import('./types.js').Config} Config */

/** @type {Config} */
const rules = merge(
  ...[require('./index-legacy.js'), require('./rules/browser.js'), require('./rules/react.js')],
);

if (detectJest()) {
  const { overrides = [] } = rules;

  rules.overrides = overrides.concat(require('./overrides/react-jest.js'));
}

module.exports = rules;
