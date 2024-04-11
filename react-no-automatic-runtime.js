import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

import reactNoAutomaticRuntimeConfig from './react-no-automatic-runtime-legacy.js';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommendedConfig: js.configs.recommended,
});

export default [...compat.config(reactNoAutomaticRuntimeConfig)];
