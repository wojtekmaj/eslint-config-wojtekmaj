/**
 * Merge multiple objects into one.
 *
 * @param {Record<string, any>} a
 * @param {...Record<string, any>} others
 * @returns {Record<string, any>}
 */
function merge(a, ...others) {
  const result = {
    ...a,
  };

  others.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (typeof result[key] === 'object') {
        if (Array.isArray(result[key])) {
          result[key] = [...result[key], ...obj[key]];
        } else {
          result[key] = {
            ...result[key],
            ...obj[key],
          };
        }
      } else {
        result[key] = obj[key];
      }
    });
  });

  return result;
}

module.exports = merge;
