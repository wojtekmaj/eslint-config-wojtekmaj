import indexRules from './rules/index.js';
import browserRules from './rules/browser.js';
import reactRules from './rules/react.js';

import merge from './utils/merge.js';

import type { Config } from './types.js';

const rules = merge(indexRules, browserRules, reactRules) satisfies Config;

export default rules;
