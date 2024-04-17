import tseslint from 'typescript-eslint';

import indexRules from './rules/index.js';
import browserRules from './rules/browser.js';
import reactRules from './rules/react.js';
import reactNoAutomaticRuntimeRules from './rules/react-no-automatic-runtime.js';

export default tseslint.config(
  ...indexRules,
  ...browserRules,
  ...reactRules,
  ...reactNoAutomaticRuntimeRules,
);
