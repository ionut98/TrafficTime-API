const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  config,
  ENV,
} = require('./config.js');

const {
  PORT,
  sslOptions,
} = config[ENV]; 

const servers = {
  'dev': require('http'),
  'prod': require('https'),
};

const {
  connectToDB,
} = require('./db/index');

const app = express();

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

app.get('/', (req, res) => {
  connectToDB();
  console.log('a client from: ', req.connection.remoteAddress);
  res.send('<i>ciao ragazzi</i>')
});

const webServer = servers[ENV].createServer(sslOptions, app);
webServer.listen(PORT, () => {
  console.log(`--------------`);
  console.log(`The server is listening! at ${PORT}`);
  console.log(`--------------`);
});
