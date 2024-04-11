import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

import reactConfig from './react-legacy.js';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommendedConfig: js.configs.recommended,
});

export default [...compat.config(reactConfig)];
