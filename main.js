const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const {
  config,
  ENV,
} = require('./config.js');

const {
  PORT,
  sslOptions,
  dbConnString,
} = config[ENV]; 

const servers = {
  'dev': require('http'),
  'prod': require('https'),
};

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

MongoClient.connect(dbConnString, { useUnifiedTopology: true, }, 
  (err, client) => {
    
    if (err) {
      return console.error(err);
    }
    console.log('Connected to TrafficAPI DB!');
    
    const db = client.db('traffictime');
    const collection = db.collection('traffictime');
    
    app.get('/times', async (req, res) => {
      const records = await collection.find({}).toArray();
      res.send(records);
    });
    
    app.post('/time', async (req, res) => {
      const {
        body: {
          record,
        },
      } = req;

      try {
        await collection.insertOne({
          record
        });
        return res.send({
          success: true,
        });
      } catch (error) {
        console.log(error);
        return res.send({
          success: false,
        });
      }

    });

  }
);


const webServer = servers[ENV].createServer(sslOptions, app);
webServer.listen(PORT, () => {
  console.log(`--------------`);
  console.log(`The server is listening! at ${PORT}`);
  console.log(`--------------`);
});
