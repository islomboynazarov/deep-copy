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
  
  var result = Object.create(Object.getPrototypeOf(value));
  var propertyNames = Object.getOwnPropertyNames(value);

  for (var j = 0; j < propertyNames.length; j += 1) {
    var key = propertyNames[j];
    var descriptor = Object.getOwnPropertyDescriptor(value, key);

    if ('value' in descriptor) {
      descriptor.value = copy(descriptor.value);
    }

    Object.defineProperty(result, key, descriptor);
  }

  return result;
} 

module.exports = { copy };
