const merge = require('./utils/merge.js');

/** @typedef {import('./types.js').Config} Config */

/** @type {Config} */
const rules = merge(...[require('./react.js'), require('./rules/react-no-automatic-runtime.js')]);

module.exports = rules;
