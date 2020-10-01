const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');

const app = express();

const {
  PORT,
  sslOptions,
} = require('./config.js');

app.use(
  bodyParser.urlencoded({
    limit: '10mb',
    extended: true,
  })
);

app.use(
  bodyParser.json({
    limit: '10mb'
  })
);

app.use(cors());

app.get('/all', (req, res) => {
  console.log('a client from: ', req.connection.remoteAddress);
});

const webServer = https.createServer(sslOptions, app);
webServer.listen(PORT, () => {
  console.log(`--------------`);
  console.log(`The server is listening! at ${PORT}`);
  console.log(`--------------`);
});
