import tseslint from 'typescript-eslint';

import indexRules from './rules/index.js';
import browserRules from './rules/browser.js';
import reactRules from './rules/react.js';

export default tseslint.config(...indexRules, ...browserRules, ...reactRules);
