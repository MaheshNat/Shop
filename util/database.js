const mongodb = require('mongodb');
const password = require('../config.json').mongodbPassword;

let _db;

const mongoConnect = (cb) => {
  mongodb.MongoClient.connect(
    `mongodb+srv://mahesh:${password}@shop-wmd8y.mongodb.net/test?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log('Connected!');
      _db = client.db();
      cb(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db;
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
