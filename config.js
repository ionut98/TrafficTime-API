const fs = require('fs');

const ENV = 'prod';
const config = {
  dev: {
    PORT: 60802,
    sslOptions: null,
    dbConnString: 'mongodb://localhost:27017/traffictime',
  },
  prod: {
    PORT: 60802,
    sslOptions: {
      cert: ENV === 'prod' ? fs.readFileSync(`../ssl/fullchain1.pem`) : null,
      key: ENV === 'prod' ? fs.readFileSync(`../ssl/privkey1.pem`) : null,
    },
    dbConnString: 'mongodb://localhost:27017/traffictime',
  },
};

module.exports = {
  config,
  ENV,
};
