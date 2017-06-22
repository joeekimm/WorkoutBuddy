const Sequelize = require('sequelize');
const db = require('../config');

const Message = db.define('Message', {
  msg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Message;
