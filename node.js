const merge = require('./utils/merge.js');

/** @typedef {import('./types.js').Config} Config */

/** @type {Config} */
const rules = merge(require('./rules/index.js'), require('./rules/node.js'));

module.exports = rules;
