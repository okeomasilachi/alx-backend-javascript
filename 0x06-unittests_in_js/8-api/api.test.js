const { expect } = require('chai');
const request = require('request');

describe('Index Page', () => {
  // Test for correct status code
  it('should return status code 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test for correct result
  it('should return "Welcome to the payment system"', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Additional test (optional)
  it('should handle unknown routes with 404 status', (done) => {
    request('http://localhost:7865/nonexistent',
      (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
  });
});
