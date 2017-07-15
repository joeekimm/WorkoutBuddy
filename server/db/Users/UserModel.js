const Sequelize = require('sequelize');
const db = require('../');

const User = db.define('User', {
  id: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  personalityType: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  preference: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  lng: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  schedule: {
    type: Sequelize.STRING,
    allowNull: true,
    get: () => this.getDataValues('schedule').split(';'),
    set: (val) => {
      this.setDataValues('schedule', val.join(';'));
    },
  },
  bodySpecs: {
    type: Sequelize.STRING,
    allowNull: true,
    get: () => this.getDataValues('bodySpecs').split(';'),
    set: (val) => {
      this.setDataValues('bodySpecs', val.join(';'));
    },
  },
},
  {
    timestamps: false,
  },
);

module.exports = User;
