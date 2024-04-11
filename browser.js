const merge = require('./utils/merge');

/** @typedef {import('./types').Config} Config */

/** @type {Config} */
const rules = merge(...[require('./index'), require('./rules/browser')]);

module.exports = rules;
