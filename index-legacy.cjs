const detectJest = require('./utils/detect-jest.cjs');
const detectTypeScript = require('./utils/detect-typescript.cjs');

/** @typedef {import('./types.cjs').Config} Config */

/** @type {Config} */
const rules = require('./rules/index.cjs');

if (detectJest()) {
  const { overrides = [] } = rules;

  rules.overrides = overrides.concat(require('./overrides/index-jest.cjs'));
}

if (detectTypeScript()) {
  const { overrides = [], settings = {} } = rules;
  const { 'import/resolver': importResolver = {} } = settings;

  rules.overrides = overrides.concat(require('./overrides/index-typescript.cjs'));
  rules.settings = {
    ...settings,
    'import/resolver': {
      ...importResolver,
      typescript: {},
    },
  };
}

module.exports = rules;
