'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((dec) => {
    if (dec.trim()) {
      const [key, value] = dec.split(':');

      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
