import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/**
 * Resolves a module path relative to the current working directory.
 *
 * @param {string} moduleName
 * @returns {string}
 */
export default function requireResolveCwd(moduleName) {
  return require.resolve(moduleName, { paths: [process.cwd()] });
}
