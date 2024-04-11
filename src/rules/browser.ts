import type { Config } from '../types.js';

const config = {
  env: {
    browser: true,
  },
  rules: {
    'no-alert': 'warn',
    'no-console': 'warn',
  },
} satisfies Config;

export default config;
