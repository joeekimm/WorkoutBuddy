const Sequelize = require('sequelize');
const db = require('../config');

const Review = db.define('Review', {
  review: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = Review;
