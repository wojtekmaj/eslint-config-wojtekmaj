/** @typedef {import('../types').Config} Config */

/** @type {Exclude<Config['overrides'], undefined>} */
const overrides = [
  {
    files: ['**/*.spec.jsx', '**/*.spec.tsx'],
    env: {
      jest: true,
    },
  },
];

module.exports = overrides;
