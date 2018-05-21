const assert = require('assert'),
  calculateTotalPoints = require('../calculateTotalPoints');

describe('calculate total points', () => {
  it('normal less than k point', () => {
    const actual = calculateTotalPoints(
        95,
        'normal',
        98,
        [17, 17, 17.5, 17.5, 17.5],
        -14,
        0
      ), //bresadola #35
      expected = 92;
    assert.equal(actual, expected);
  });
  it('normal more than k point', () => {
    const actual = calculateTotalPoints(
        111,
        'normal',
        98,
        [19, 19.5, 19, 19, 19],
        -14.4,
        3.2
      ),
      expected = 131.8;
    assert.equal(actual, expected);
  });
  it('normal equal to k point and equal notes', () => {
    const actual = calculateTotalPoints(
        98,
        'normal',
        98,
        [10, 10, 10, 10, 10],
        0,
        0
      ),
      expected = 90;
    assert.equal(actual, expected);
  });
  it('large less than k point', () => {
    const actual = calculateTotalPoints(
        119.5,
        'lArGe',
        120,
        [17.5, 17.5, 17, 17.5, 17.5],
        -5,
        0
      ),
      expected = 106.6;
    assert.equal(actual, expected);
  });
  it('large more than k point', () => {
    const actual = calculateTotalPoints(
        134,
        'Large',
        120,
        [19, 20, 19.5, 19, 18.5],
        -5.4,
        0
      ),
      expected = 137.3;
    assert.equal(actual, expected);
  });
  it('large equal to k point and sorted notes', () => {
    const actual = calculateTotalPoints(
        120,
        'LargE',
        120,
        [10, 11, 12, 13, 14],
        0,
        0
      ),
      expected = 96;
    assert.equal(actual, expected);
  });
  it('flying less than k point', () => {
    const actual = calculateTotalPoints(
        187,
        'FLYING',
        200,
        [16.5, 16, 16, 16.5, 16],
        -4.2,
        0
      ),
      expected = 148.7;
    assert.equal(actual, expected);
  });
  it('flying more than k point', () => {
    const actual = calculateTotalPoints(
        227.5,
        'FLYing',
        200,
        [18, 18.5, 17.5, 18.5, 18.5],
        -8.4,
        8.7
      ),
      expected = 208.3;
    assert.equal(actual, expected);
  });
  it('flying equal to k point and unsorted notes', () => {
    const actual = calculateTotalPoints(
        200,
        'flyING',
        200,
        [10, 6, 14, 20, 1],
        0,
        0
      ),
      expected = 150;
    assert.equal(actual, expected);
  });
});
