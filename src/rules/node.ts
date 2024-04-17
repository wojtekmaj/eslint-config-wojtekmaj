import globals from 'globals';

import type { FlatConfig } from '../types.js';

const config: FlatConfig[] = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

export default config;
