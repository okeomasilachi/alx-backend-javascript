// 6-payment_token.test.js

const getPaymentTokenFromAPI = require('./6-payment_token');
// var expect;
// import('chai').then(chai => {
//   expect = chai.expect;
// }).catch(err => {
//   console.error(err);
// });
const chai = require('chai');
const expect = chai.expect;


describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response from the API when success is true',
    (done) => {
      getPaymentTokenFromAPI(true)
        .then((response) => {
          expect(response).to.deep.equal(
            { data: 'Successful response from the API' }
          );
          done();
        })
        .catch((error) => {
          done(error);
        });
    });

  it('should handle errors appropriately when API call fails',
    (done) => {
      getPaymentTokenFromAPI(true)
        .then((response) => {
          // Simulate API failure by throwing an error
          throw new Error('API call failed');
        })
        .catch((error) => {
          expect(error.message).to.equal('API call failed');
          done();
        });
    });
});
