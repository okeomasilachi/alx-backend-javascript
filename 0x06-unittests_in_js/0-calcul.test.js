const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should return NaN for non-numeric and No input at all', () => {
    assert.equal(calculateNumber('a', 3), NaN);
    assert.equal(calculateNumber(1.5, 'b'), NaN);
    assert.equal(calculateNumber(), NaN);
  });
});
