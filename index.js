const detectJest = require('./utils/detect-jest');
const detectTypeScript = require('./utils/detect-typescript');

/** @typedef {import('./types').Config} Config */

/** @type {Config} */
const rules = require('./rules/index');

if (detectJest()) {
  const { overrides = [] } = rules;

  rules.overrides = overrides.concat(require('./overrides/index-jest'));
}

if (detectTypeScript()) {
  const { overrides = [], settings = {} } = rules;
  const { 'import/resolver': importResolver = {} } = settings;

  rules.overrides = overrides.concat(require('./overrides/index-typescript'));
  rules.settings = {
    ...settings,
    'import/resolver': {
      ...importResolver,
      typescript: {},
    },
  };
}

module.exports = rules;
