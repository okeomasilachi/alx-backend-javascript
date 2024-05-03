// var expect;
// import('chai').then(chai => {
//   expect = chai.expect;
// }).catch(err => {
//   console.error(err);
// });
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should correctly add rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should handle division by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0, 1.4)).to.equal(0);
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle invalid inputs', () => {
      expect(isNaN(calculateNumber('SUM', 'a', 3))).to.be.true;
      expect(isNaN(calculateNumber('DIVIDE', 10, null))).to.be.true;
    });

    it('should return undefined for non-numeric inputs', () => {
      expect(calculateNumber('a', 3)).to.be.undefined;
      expect(calculateNumber(1.5, 'b')).to.be.undefined;
    });

    it('should handle large numbers correctly', () => {
      expect(calculateNumber('SUM', 9999999999999999, 1)).to.equal(10000000000000000);
      expect(calculateNumber('SUBTRACT', -9999999999999999, 1)).to.equal(-10000000000000000);
    });

    it('should handle very small numbers correctly', () => {
      expect(calculateNumber('SUM', 0.000000001, 0.000000002)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -0.000000001, -0.000000002)).to.equal(0);
    });

    it('should handle extremely large rounded numbers', () => {
      const maxSafeInteger = Number.MAX_SAFE_INTEGER;
      expect(calculateNumber('SUM', maxSafeInteger, maxSafeInteger)).to.equal(18014398509481982);
    });

    it('should handle rounding edge cases', () => {
      expect(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
      expect(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
      expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });

    it('should handle invalid operation type gracefully', () => {
      expect(calculateNumber('MULTIPLY', 2, 3)).to.be.undefined;
    });
  });
});
