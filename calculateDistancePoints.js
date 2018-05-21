const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (distance === undefined || !hillSize || !kPoint)
    throw Error('Undefined argument(s).');
  switch (hillSize.toLowerCase()) {
    case 'normal': {
      let result = 60;
      if (distance < kPoint) result -= (kPoint - distance) * 2;
      if (distance > kPoint) result += (distance - kPoint) * 2;
      return result;
    }
    case 'large': {
      let result = 60;
      if (distance < kPoint) result -= (kPoint - distance) * 1.8;
      if (distance > kPoint) result += (distance - kPoint) * 1.8;
      return result;
    }
    case 'flying': {
      let result = 120;
      if (distance < kPoint) result -= (kPoint - distance) * 1.2;
      if (distance > kPoint) result += (distance - kPoint) * 1.2;
      return result;
    }
    default:
      throw Error(`Wrong hill size: ${hillSize}`);
  }
};

module.exports = calculateDistancePoints;
