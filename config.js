const fs = require('fs');

const PORT = 60802;

const sslOptions = {
  cert: fs.readFileSync(`${__dirname}/ssl/fullchain1.pem`),
  key: fs.readFileSync(`${__dirname}/ssl/privkey1.pem`),
};

module.exports = {
  PORT,
  sslOptions,
}
