const Sequelize = require('sequelize');
const db = require('../config');

const Accomplishment = db.define('Accomplishment', {
  goal: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
})

module.exports = Accomplishment;
