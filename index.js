import indexRules from './rules/index.js';
import jestOverrides from './overrides/index-jest.js';
import typescriptOverrides from './overrides/index-typescript.js';

import detectJest from './utils/detect-jest.js';
import detectTypeScript from './utils/detect-typescript.js';

/**
 * @typedef {import('./types.js').Config} Config
 */

/** @type {Config[]} */
const rules = [...indexRules];

if (detectJest()) {
  rules.push(...jestOverrides);
}

if (detectTypeScript()) {
  rules.push(...typescriptOverrides);
}

export default rules;
