const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = 60802;

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

app.listen(port, () => {
  console.log(`--------------`);
  console.log(`The server is listening! at ${port}`);
  console.log(`--------------`);
});
