/**
 * set active style
 *
 * @param {number} idx active index
 * @param {array} array origin array
 * @returns {array} array
 */
export const setActiveStyle = (idx, array) => {
  const _array = [...array];
  const _obj = {
    value: _array[idx],
    itemStyle: {
      color: '#C35F3F',
    },
  };

  _array[idx] = _obj;

  return _array;
};

/**
 * set index style
 *
 * @param {number} idx style index
 * @param {array} array original array
 * @returns {array} array
 */
export const setIndexStyle = (idx, array) => {
  const _array = [...array];
  const _obj = {
    value: _array[idx],
    itemStyle: {
      color: '#ECE280',
    },
  };

  _array[idx] = _obj;

  return _array;
};

/**
 * set sorted array
 *
 * @param {*} idx index
 * @param {*} array original array
 * @returns {array} sorted array style
 */
export const setSortedStyle = (idx, array) => {
  const _array = [...array];
  const _len = _array.length;

  for (let i = idx + 1; i < _len; i++) {
    const _obj = {
      value: _array[i],
      itemStyle: {
        color: '#68A060',
      },
    };

    _array[i] = _obj;
  }

  return _array;
};

/**
 * set before sorted style
 *
 * @param {number} idx start index
 * @param {array} array original array
 * @returns {array}  before sorted array style
 */
export const setBeforeSortedStyle = (idx, array) => {
  const _array = [...array];

  for (let i = idx - 1; i >= 0; i--) {
    const _obj = {
      value: _array[i],
      itemStyle: {
        color: '#68A060',
      },
    };

    _array[i] = _obj;
  }

  return _array;
};
