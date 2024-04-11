import type { Config } from '../types.js';

const config = {
  rules: {
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'error',
  },
} satisfies Config;

export default config;
