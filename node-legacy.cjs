const merge = require('./utils/merge.cjs');

/** @typedef {import('./types.cjs').Config} Config */

/** @type {Config} */
const rules = merge(...[require('./index-legacy.cjs'), require('./rules/node.cjs')]);

module.exports = rules;
