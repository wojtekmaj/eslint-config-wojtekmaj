import tseslint from 'typescript-eslint';

import indexRules from './rules/index.js';
import nodeRules from './rules/node.js';

export default tseslint.config(...indexRules, ...nodeRules);
