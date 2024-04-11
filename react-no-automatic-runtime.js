const merge = require('./utils/merge');

/** @typedef {import('./types').Config} Config */

/** @type {Config} */
const rules = merge(...[require('./react'), require('./rules/react-no-automatic-runtime')]);

module.exports = rules;
