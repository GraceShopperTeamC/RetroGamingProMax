const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()

// BEGIN STRIPE INTEGRATION

// Stripe key is a public test key. Don't enter real data
const stripe = require('stripe')
// Publishable key
('pk_test_51MOuOwKbi3oNzNfb5cVwQmuZqg6whlLjMArJ7iYouod3jihd8mSSRhvLcJC5JvUB59Kbk2EsUbW8fA4I9wM44T6w0043ZFZq1N');
// Secret key
('sk_test_51MOuOwKbi3oNzNfbes8pf4XmiYo6tqQrzBf9CVTY1oNLMgxGFNEGjw0PzFy34QtCmGhGcZY9OHjkMXSOFKrLKHUC00zvgHzk64');

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// END STRIPE INTEGRATION


module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())

// auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
