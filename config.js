const fs = require('fs');

const ENV = 'prod';
const config = {
  dev: {
    PORT: 60802,
    sslOptions: null,
  },
  prod: {
    PORT: 60802,
    sslOptions: {
      cert: ENV === 'prod' ? fs.readFileSync(`../ssl/fullchain1.pem`) : null,
      key: ENV === 'prod' ? fs.readFileSync(`../ssl/privkey1.pem`) : null,
    },
  },
};

module.exports = {
  config,
  ENV,
};
