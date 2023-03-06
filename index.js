const detectJest = require('./utils/detect-jest');

const rules = require('./rules/index');

if (detectJest()) {
  rules.overrides.push(require('./overrides/index-jest'));
}

module.exports = rules;
