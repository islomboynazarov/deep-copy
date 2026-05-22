function copy(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (typeof value === 'function') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (Array.isArray(value)) {
    var arrCopy = [];
    for (var i = 0; i < value.length; i += 1) {
      arrCopy[i] = copy(value[i]);
    }
    return arrCopy;
  }
}

module.exports = { copy };
