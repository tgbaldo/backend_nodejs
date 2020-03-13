const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./src/config/routes');

const app = express();

app.use(bodyParser.json());
app.use(router);

app.use(function(err, req, res, next) {
  let { statusCode, message } = err;

  if (!statusCode || !message) {
    statusCode = 500;
    message = 'internal server error';
  }

  return res.status(statusCode).send({
    error: true,
    message: message
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('> App is running!');
});