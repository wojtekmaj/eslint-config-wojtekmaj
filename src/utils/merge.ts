import type { Config } from '../types.js';

export default function merge(a: Config, ...others: Config[]): Config {
  const result: Config = {
    ...a,
  };

  others.forEach((obj) => {
    (Object.keys(obj) as (keyof Config)[]).forEach((key) => {
      const previousValue = result[key];
      const value = obj[key];

      if (!value) {
        return;
      }

      if (typeof previousValue === 'object') {
        if (typeof value !== 'object') {
          throw new Error('Cannot merge an object with a non-object');
        }

        if (Array.isArray(previousValue)) {
          if (!Array.isArray(value)) {
            throw new Error('Cannot merge an array with an object');
          }

          (result[key] as typeof previousValue) = [...previousValue, ...value];
        } else {
          if (Array.isArray(value)) {
            throw new Error('Cannot merge an object with an array');
          }

          (result[key] as typeof previousValue) = {
            ...previousValue,
            ...value,
          };
        }
      } else {
        (result[key] as typeof value) = value;
      }
    });
  });

  return result;
}
