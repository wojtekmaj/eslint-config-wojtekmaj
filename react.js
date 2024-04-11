import indexConfig from './index.js';

import browserRules from './rules/browser.js';
import reactRules from './rules/react.js';

/**
 * @typedef {import('./types.js').Config} Config
 */

/** @type {Config[]} */
const rules = [...indexConfig, ...browserRules, ...reactRules];

export default rules;
