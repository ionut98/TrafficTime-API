const fs = require('fs');

const PORT = 60802;

const sslOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/boschete.sytes.net/fullchain.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/boschete.sytes.net/privkey.pem'),
};

module.exports = {
  PORT,
  sslOptions,
}
