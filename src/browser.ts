import tseslint from 'typescript-eslint';

import indexRules from './rules/index.js';
import browserRules from './rules/browser.js';

export default tseslint.config(...indexRules, ...browserRules);
