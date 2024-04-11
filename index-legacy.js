const detectJest = require('./utils/detect-jest.js');
const detectTypeScript = require('./utils/detect-typescript.js');

/** @typedef {import('./types.js').Config} Config */

/** @type {Config} */
const rules = require('./rules/index.js');

if (detectJest()) {
  const { overrides = [] } = rules;

  rules.overrides = overrides.concat(require('./overrides/index-jest.js'));
}

if (detectTypeScript()) {
  const { overrides = [], settings = {} } = rules;
  const { 'import/resolver': importResolver = {} } = settings;

  rules.overrides = overrides.concat(require('./overrides/index-typescript.js'));
  rules.settings = {
    ...settings,
    'import/resolver': {
      ...importResolver,
      typescript: {},
    },
  };
}

module.exports = rules;
