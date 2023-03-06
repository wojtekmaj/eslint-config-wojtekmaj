function requireResolveCwd(moduleName) {
  return require.resolve(moduleName, { paths: [process.cwd()] });
}

module.exports = requireResolveCwd;
