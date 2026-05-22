function copy(value) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (typeof value === 'function') {
    return value;
  }
}

module.exports = { copy };
