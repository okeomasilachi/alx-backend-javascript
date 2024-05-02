// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should correctly calculate sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when both inputs are 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1, 3), 2);
    assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should handle large numbers correctly', () => {
    assert.strictEqual(calculateNumber(1000000, 2000000), 3000000);
  });

  it('should handle decimal inputs near rounding thresholds', () => {
    assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
    assert.strictEqual(calculateNumber(1.6, 3.5), 6);
  });
  it('should return NaN for non-numeric inputs', () => {
    assert.strictEqual(calculateNumber('a', 3), NaN);
    assert.strictEqual(calculateNumber(1.5, 'b'), NaN);
  });
});
