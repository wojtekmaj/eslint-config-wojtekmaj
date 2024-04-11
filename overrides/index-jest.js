/** @typedef {import('../types.js').Config} Config */

/** @type {Exclude<Config['overrides'], undefined>} */
const overrides = [
  {
    files: ['**/*.spec.js', '**/*.spec.ts', '**/__tests__/*'],
    env: {
      jest: true,
    },
  },
];

module.exports = overrides;
