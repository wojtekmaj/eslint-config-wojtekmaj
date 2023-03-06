const merge = require('./utils/merge');
const detectJest = require('./utils/detect-jest');

const rules = merge(...[require('./index'), require('./rules/browser'), require('./rules/react')]);

if (detectJest()) {
  rules.overrides.push(require('./overrides/react-jest'));
}

module.exports = rules;
