const merge = require('./utils/merge');

module.exports = merge(...[require('./index'), require('./rules/node')]);
