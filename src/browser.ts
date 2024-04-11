import merge from './utils/merge.js';

import indexRules from './rules/index.js';
import browserRules from './rules/browser.js';

import type { Config } from './types.js';

const rules = merge(indexRules, browserRules) satisfies Config;

export default rules;
