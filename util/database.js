const config = require('../config.json');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('Shop', 'root', config.mysqlPassword, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
