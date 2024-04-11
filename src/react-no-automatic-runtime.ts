import merge from './utils/merge.js';

import indexRules from './rules/index.js';
import browserRules from './rules/browser.js';
import reactRules from './rules/react.js';
import reactNoAutomaticRuntimeRules from './rules/react-no-automatic-runtime.js';

import type { Config } from './types.js';

const rules = merge(
  indexRules,
  browserRules,
  reactRules,
  reactNoAutomaticRuntimeRules,
) satisfies Config;

export default rules;
