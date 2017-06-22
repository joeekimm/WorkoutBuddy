const Sequelize = require('sequelize');
// May not need these
require('dotenv').config()
require('dotenv').load()

const db = new Sequelize('workout', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
});
console.log('Successfully connected to DB');

module.exports = db;
