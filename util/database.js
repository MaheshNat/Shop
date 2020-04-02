const mysql = require('mysql2');
const config = require('../config.json');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'Shop',
  password: config.mysqlPassword
});

module.exports = pool.promise();
