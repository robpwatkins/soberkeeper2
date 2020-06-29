const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

app.use('/ping', (request, response) => {
  return response.send('pong');
})

app.listen(port, () => {
  console.log('Im listening!');
})