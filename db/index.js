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

    const result = await client.db().admin().listDatabases();
    console.log(result);

  } catch (error) {
    console.log(error);

  } finally {
    await client.close();
  }

};

module.exports = {
  connectToDB,
};
