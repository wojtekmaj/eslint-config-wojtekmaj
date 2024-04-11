const path = require('node:path');

/**
 * Detects if the project uses TypeScript.
 *
 * @returns {boolean}
 */
function detectTypeScript() {
  const root = process.cwd();

  if (!root) {
    return false;
  }

  const packageJson = require(path.resolve(root, 'package.json'));

  return Boolean(packageJson.devDependencies && packageJson.devDependencies.typescript);
}

module.exports = detectTypeScript;
