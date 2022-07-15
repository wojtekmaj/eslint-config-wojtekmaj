const merge = require('./utils/merge');

module.exports = merge(...[require('./react'), require('./rules/react-no-automatic-runtime')]);
