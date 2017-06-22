const Sequelize = require('sequelize');
const db = require('../config/');

const User = db.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  personalityType: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  preference: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  schedule: {
    type: Sequelize.STRING,
    allowNull: true,
    get: () => {
      return this.getDataValues('schedule').split(';')
    },
    set: (val) => {
      this.setDataValues('schedule', val.join(';'));
    }
  },
  bodySpecs: {
    type: Sequelize.STRING,
    allowNull: true,
    get: () => {
      return this.getDataValues('bodySpecs').split(';')
    },
    set: (val) => {
      this.setDataValues('bodySpecs', val.join(';'));
    }
  },
});

module.exports = User;
