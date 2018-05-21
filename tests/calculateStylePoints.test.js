const assert = require('assert'),
  calculateStylePoints = require('../calculateStylePoints');

describe('calculate notes', () => {
  it('same notes', () => {
    const actual = calculateStylePoints([10, 10, 10, 10, 10]),
      expected = 30;
    assert.equal(actual, expected);
  });
  it('sorted notes', () => {
    const actual = calculateStylePoints([10, 11, 12, 13, 14]),
      expected = 36;
    assert.equal(actual, expected);
  });
  it('unsorted notes', () => {
    const actual = calculateStylePoints([10, 7, 12, 13, 3]),
      expected = 29;
    assert.equal(actual, expected);
  });
  it('wrong argument type', () => {
    const expected = TypeError;
    assert.throws(() => calculateStylePoints('test'), expected);
  });
  it('not enough notes', () => {
    const expected = Error;
    assert.throws(() => calculateStylePoints([10, 13, 8]), expected);
  });
});
