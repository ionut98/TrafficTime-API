const {
  MongoClient,
} = require('mongodb');


const {
  uri,
} = require('./dbConfig');

const client = new MongoClient(uri, { useUnifiedTopology: true });

const connectToDB = async () => {

  try {
    await client.connect();

  } catch (error) {
    console.log(error);

  } finally {
    await client.close();
  }

};

module.exports = {
  connectToDB,
};
