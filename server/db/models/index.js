const Sequelize = require('sequelize');
const db = require('../config/');

const User = require('./users');
const Workout = require('./workouts');
const Message = require('./messages');
const Review = require('./reviews');
// const Friend = require('./friends');
const BodyPart = require('./bodyParts');
const Accomplishment = require('./accomplishments');

User.hasMany(Workout, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });
Workout.belongsTo(User, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });

User.hasMany(Accomplishment, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });
Accomplishment.belongsTo(User, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });

User.hasMany(Message, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });
Message.belongsTo(User, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });

User.hasMany(Review, { as: 'sender', foreignKey: { name: 'sender_id' }, onDelete: 'CASCADE' });
Review.belongsTo(User, { as: 'sent_reviews', foreignKey: { name: 'sender_id' }, onDelete: 'CASCADE' });
User.hasMany(Review, { as: 'receiver', foreignKey: { name: 'receiver_id' }, onDelete: 'CASCADE' });
Review.belongsTo(User, { as: 'received_reviews', foreignKey: { name: 'receiver_id' }, onDelete: 'CASCADE' });

module.exports = {
  User,
  Workout,
  Message,
  Review,
  // Friend,
  BodyPart,
  Accomplishment,
}
