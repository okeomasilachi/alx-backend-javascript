// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should correctly add rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should handle division by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0, 1.4), 0);
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle invalid inputs', () => {
      assert(isNaN(calculateNumber('SUM', 'a', 3)));
      assert(isNaN(calculateNumber('DIVIDE', 10, null)));
    });
    it('should return undefined for non-numeric inputs', () => {
      assert.strictEqual(calculateNumber('a', 3), undefined);
      assert.strictEqual(calculateNumber(1.5, 'b'), undefined);
    });

    it('should handle large numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 9999999999999999, 1), 10000000000000000);
      assert.strictEqual(calculateNumber('SUBTRACT', -9999999999999999, 1), -10000000000000000);
    });

    it('should handle very small numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 0.000000001, 0.000000002), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -0.000000001, -0.000000002), 0);
    });

    it('should handle extremely large rounded numbers', () => {
      const maxSafeInteger = Number.MAX_SAFE_INTEGER;
      assert.strictEqual(calculateNumber('SUM', maxSafeInteger, maxSafeInteger), 18014398509481982);
    });
    it('should handle rounding edge cases', () => {
      assert.strictEqual(calculateNumber('SUM', 0.5, 0.5), 2);
      assert.strictEqual(calculateNumber('SUM', 1.5, 1.5), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 3, 2), 1.5);
    });

    it('should handle invalid operation type gracefully', () => {
      assert.strictEqual(calculateNumber('MULTIPLY', 2, 3), undefined); // Invalid operation type should return undefined
    });
  });
});
