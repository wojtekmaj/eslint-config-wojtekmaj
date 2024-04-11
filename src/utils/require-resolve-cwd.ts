/**
 * Resolves a module path relative to the current working directory.
 *
 * @param {string} moduleName
 * @returns {string}
 */
export default function requireResolveCwd(moduleName: string): string {
  return require.resolve(moduleName, { paths: [process.cwd()] });
}
