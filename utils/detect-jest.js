import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/**
 * Detects if the project uses Jest.
 *
 * @returns {boolean}
 */
export default function detectJest() {
  const root = process.cwd();

  if (!root) {
    return false;
  }

  const packageJson = require(path.resolve(root, 'package.json'));

  return Boolean(packageJson.devDependencies && packageJson.devDependencies.jest);
}
