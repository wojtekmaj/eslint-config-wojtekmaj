const path = require('node:path');

// Detect Jest dependency
function detectJest() {
  const root = process.cwd();

  if (!root) {
    return false;
  }

  const packageJson = require(path.resolve(root, 'package.json'));

  return Boolean(packageJson.devDependencies && packageJson.devDependencies.jest);
}

module.exports = detectJest;
