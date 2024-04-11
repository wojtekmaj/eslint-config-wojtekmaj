const merge = require('./utils/merge.js');

/** @typedef {import('./types.js').Config} Config */

/** @type {Config} */
const rules = merge(require('./rules/index.js'), require('./rules/browser.js'));

module.exports = rules;
