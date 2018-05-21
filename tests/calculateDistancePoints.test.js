const assert = require('assert'),
  calculateDistancePoints = require('../calculateDistancePoints');

describe('calculate distance points', () => {
  it('normal less than k point', () => {
    const actual = calculateDistancePoints(95, 'normal', 98), //bresadola #35
      expected = 54;
    assert.equal(actual, expected);
  });
  it('normal more than k point', () => {
    const actual = calculateDistancePoints(111, 'normal', 98),
      expected = 86;
    assert.equal(actual, expected);
  });
  it('normal equal than k point', () => {
    const actual = calculateDistancePoints(98, 'normal', 98),
      expected = 60;
    assert.equal(actual, expected);
  });
  it('large less than k point', () => {
    const actual = calculateDistancePoints(119.5, 'large', 120), //velta #25
      expected = 59.1;
    assert.equal(actual, expected);
  });
  it('large more than k point', () => {
    const actual = calculateDistancePoints(134, 'large', 120),
      expected = 85.2;
    assert.equal(actual, expected);
  });
  it('large equal than k point', () => {
    const actual = calculateDistancePoints(120, 'large', 120),
      expected = 60;
    assert.equal(actual, expected);
  });
  it('flying less than k point', () => {
    const actual = calculateDistancePoints(187, 'flying', 200), //sakuyama #43
      expected = 104.4;
    assert.equal(actual, expected);
  });
  it('flying more than k point', () => {
    const actual = calculateDistancePoints(227.5, 'flying', 200),
      expected = 153;
    assert.equal(actual, expected);
  });
  it('flying equal than k point', () => {
    const actual = calculateDistancePoints(200, 'flying', 200),
      expected = 120;
    assert.equal(actual, expected);
  });
  it('not enough arguments', () => {
    const expected = Error;
    assert.throws(() => calculateDistancePoints(100, 'normal'), expected);
  });
  it('wrong hill size', () => {
    const expected = Error;
    assert.throws(() => calculateDistancePoints(100, 'test', 100), expected);
  });
});
