const merge = require('./utils/merge.cjs');

/** @typedef {import('./types.cjs').Config} Config */

/** @type {Config} */
const rules = merge(
  ...[require('./react-legacy.cjs'), require('./rules/react-no-automatic-runtime.cjs')],
);

module.exports = rules;
