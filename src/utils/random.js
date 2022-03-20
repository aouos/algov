/**
 * get random length
 *
 * @returns {number} number of length
 */
export const getRandomLength = () => {
  const _len = Math.floor(Math.random() * 6 + 5);

  return _len;
};

/**
 * get a random array
 *
 * @param {number} len array length
 * @returns {array} random array
 */
export const getRandomArray = (len) => {
  const _array = [];

  for (let i = 0; i < len; i++) {
    const _temp = Math.floor(Math.random() * 50 + 1);
    _array.push(_temp);
  }

  return _array;
};

/**
 * get a random number
 *
 * @returns {number} return a random number
 */
export const getRandomNumber = () => {
  return Math.ceil(Math.random() * 50);
};
