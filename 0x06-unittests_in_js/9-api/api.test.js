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
  it('should return "Welcome to the payment system"',
  (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Additional test (optional)
  it('should handle unknown routes with 404 status',
  (done) => {
    request('http://localhost:7865/nonexistent',
      (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
  });

  it('should return status code 200 when :id is a number',
  (done) => {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return status code 404 when :id is not a number',
  (done) => {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return a string with the id when :id is a number',
  (done) => {
    request('http://localhost:7865/cart/2345', (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.a('string');
      expect(body).to.contain(
        'Payment methods for cart :2345'
      );
      done();
    });
  });

  it('should return 404 and error message when :id is NOT a number',
  (done) => {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(404);
      expect(body).to.be.a('string');
      expect(body).to.contain('id: Must be a number.');

      done();
    });
  });

  it('should return status code 404 when :id is missing', (done) => {
    request('http://localhost:7865/cart/', (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
