const Sequelize = require('sequelize');
const db = require('../');

const Review = db.define('Review', {
  review: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // timestamps: false,
},
  {
    timestamps: false,
  },
);

module.exports = Review;
