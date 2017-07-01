const Sequelize = require('sequelize');
const db = require('../');

const BodyPart = db.define('BodyPart', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  info: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // timestamps: false,
},
  {
    timestamps: false,
  },
);

module.exports = BodyPart;
