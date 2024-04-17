import globals from 'globals';

import type { FlatConfig } from '../types.js';

const config: FlatConfig[] = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-alert': 'warn',
      'no-console': 'warn',
    },
  },
];

export default config;
