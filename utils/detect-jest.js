const path = require('node:path');

/**
 * Detects if the project uses Jest.
 *
 * @returns {boolean}
 */
function detectJest() {
  const root = process.cwd();

  if (!root) {
    return false;
  }

  const packageJson = require(path.resolve(root, 'package.json'));

  return Boolean(packageJson.devDependencies && packageJson.devDependencies.jest);
}

module.exports = detectJest;
