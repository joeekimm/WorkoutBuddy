const Sequelize = require('sequelize');
const db = require('../');

const Friend = db.define('Friend', {
  friend_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
  {
    timestamps: false,
  });

module.exports = Friend;
