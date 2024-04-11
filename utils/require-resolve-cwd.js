/**
 * Resolves a module path relative to the current working directory.
 *
 * @param {string} moduleName
 * @returns {string}
 */
function requireResolveCwd(moduleName) {
  return require.resolve(moduleName, { paths: [process.cwd()] });
}

module.exports = requireResolveCwd;
