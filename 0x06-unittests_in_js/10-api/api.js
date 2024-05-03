const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

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

  res.send(`Payment methods for cart :${cartId}`);
});

app.get('/available_payments', (req, res) => {
  res.json(
    {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
  );
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).send('Username is required');
  }
  if (typeof userName !== 'string' || userName.trim() === '') {
    return res.status(400).send('Username must be a non-empty string');
  }
  res.send(`Welcome ${userName}`);
});


const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;
