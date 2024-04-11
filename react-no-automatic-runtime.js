import indexConfig from './index.js';

import browserRules from './rules/browser.js';
import reactNoAutomaticRuntimeRules from './rules/react-no-automatic-runtime.js';

/**
 * @typedef {import('./types.js').Config} Config
 */

/** @type {Config[]} */
const rules = [...indexConfig, ...browserRules, ...reactNoAutomaticRuntimeRules];

export default rules;
