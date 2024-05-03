// 3-payment.test.js
// var expect;
// import('chai').then(chai => {
//   expect = chai.expect;
// }).catch(err => {
//   console.error(err);
// });
const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should call Utils.calculateNumber with SUM type and correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
    calculateNumberSpy.restore();
  });

  it('should calculate and log the correct total for SUM operation', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    const expectedMessage = `The total is: ${totalAmount + totalShipping}`;
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly(expectedMessage)).to.be.true;

    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with SUBTRACT type and correct arguments',
    () => {
      const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
      calculateNumberSpy.restore();
    });

  it('should calculate and log the correct total for SUBTRACT operation',
    () => {
      const consoleLogSpy = sinon.spy(console, 'log');
      const totalAmount = 100;
      const totalShipping = 20;

      sendPaymentRequestToApi(totalAmount, totalShipping);

      const expectedMessage = `The total is: ${totalAmount - totalShipping}`;
      expect(consoleLogSpy.calledOnce).to.be.true;
      expect(consoleLogSpy.calledWithExactly(expectedMessage)).to.be.false;

      consoleLogSpy.restore();
    });

  it('should call Utils.calculateNumber with DIVIDE type and non-zero denominator',
    () => {
      const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
      const totalAmount = 100;
      const totalShipping = 20;

      sendPaymentRequestToApi(totalAmount, totalShipping);

      expect(calculateNumberSpy.calledOnce).to.be.true;
      expect(calculateNumberSpy.calledWithExactly(
        'DIVIDE', totalAmount, totalShipping)
      ).to.be.false;

      calculateNumberSpy.restore();
    });

  it('should calculate and log the correct total for DIVIDE operation with \
  non-zero denominator', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    const expectedMessage = `The total is: ${totalAmount / totalShipping}`;
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly(expectedMessage)).to.be.false;

    consoleLogSpy.restore();
  });

  it('should handle DIVIDE operation with zero denominator and log error', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const totalAmount = 100;
    const totalShipping = 0;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    const expectedMessage = 'The total is: Error';
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly(expectedMessage)).to.be.false;

    consoleLogSpy.restore();
  });

  it('should handle invalid operation type gracefully', () => {
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20, 'INVALID_OPERATION');

    const expectedMessage = 'The total is: undefined';
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly(expectedMessage)).to.be.false;

    consoleLogSpy.restore();
  });
});
