const Sequelize = require('sequelize');
const db = require('../config/');

const User = db.define('User', {
  id: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
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
