// 4-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
	let calculateNumberStub;

	beforeEach(() => {
		calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
	});

	afterEach(() => {
		calculateNumberStub.restore();
	});

	it('should call Utils.calculateNumber with correct arguments', () => {
		sendPaymentRequestToApi(100, 20);
		sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
	});

	it('should log the correct total', () => {
		const consoleLogSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 20);
		const expectedMessage = 'The total is: 10';
		sinon.assert.calledWith(consoleLogSpy, expectedMessage);
		consoleLogSpy.restore();
	});
});
