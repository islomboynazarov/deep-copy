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
}

module.exports = { copy };
