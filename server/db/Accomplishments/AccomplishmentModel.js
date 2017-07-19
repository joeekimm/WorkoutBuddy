const Sequelize = require('sequelize');
const db = require('../');

const Accomplishment = db.define('Accomplishment', {
  goal: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  picture: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
},
  {
    timestamps: false,
  },
);

module.exports = Accomplishment;
