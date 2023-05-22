const detectJest = require('./utils/detect-jest');
const detectTypeScript = require('./utils/detect-typescript');

const rules = require('./rules/index');

if (detectJest()) {
  rules.overrides.push(require('./overrides/index-jest'));
}

if (detectTypeScript()) {
  rules.overrides.push(require('./overrides/index-typescript'));
  rules.settings['import/resolver'].typescript = {};
}

module.exports = rules;
