import merge from './utils/merge.js';

import indexRules from './rules/index.js';
import nodeRules from './rules/node.js';

import type { Config } from './types.js';

const rules = merge(indexRules, nodeRules) satisfies Config;

export default rules;
