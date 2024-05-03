const express = require('express');
const app = express();
const port = 7865;

const validateIdParam = (req, res, next) => {
  const id = req.params.id;
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('id: Must be a number.');
  }
  next();
};

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', validateIdParam, (req, res) => {
  const cartId = req.params.id;

  res.send(`Payment methods for cart ${cartId}`);
});

const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;
