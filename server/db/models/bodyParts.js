const Sequelize = require('sequelize');
const db = require('../config');

const BodyPart = db.define('BodyPart', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  info: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = BodyPart;
