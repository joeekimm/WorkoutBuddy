const Sequelize = require('sequelize');
const db = require('../');

const City = db.define('City', {
  name: {
    type: Sequelize.STRING,
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  lng: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
    // timestamps: false,
},
  {
    timestamps: false,
  },
);

module.exports = City;
