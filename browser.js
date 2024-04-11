import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

import browserConfig from './browser-legacy.cjs';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommendedConfig: js.configs.recommended,
});

export default [...compat.config(browserConfig)];
