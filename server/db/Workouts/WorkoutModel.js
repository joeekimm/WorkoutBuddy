const Sequelize = require('sequelize');
const db = require('../');

const Workout = db.define('Workout', {
  routine: {
    type: Sequelize.STRING,
    allowNull: false,
    get: () => this.getDataValues('routine').split(';'),
    set: (val) => {
      this.setDataValues('routine').join(';');
    },
  },
  focus: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
<<<<<<< HEAD
  // timestamps: false,
},
  {
    timestamps: false,
  },
);
=======
});
>>>>>>> trying to fix npm install issue

module.exports = Workout;
