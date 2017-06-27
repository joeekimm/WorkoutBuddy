const Sequelize = require('sequelize');
const db = require('./config');

const User = require('./Users/UserModel');
const Workout = require('./Workouts/WorkoutModel');
const Message = require('./Messages/MessageModel');
const Review = require('./Reviews/ReviewModel');
// const Friend = require('./Friends/FriendModel');
const BodyPart = require('./BodyParts/BodyPartModel');
const Accomplishment = require('./Accomplishments/AccomplishmentModel');

User.hasMany(Workout, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });
Workout.belongsTo(User, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });

User.hasMany(Accomplishment, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });
Accomplishment.belongsTo(User, { foreignKey: { name: 'user_id' }, onDelete: 'CASCADE' });

User.hasMany(Message, { as: 'sender_message', foreignKey: { name: 'sender_id' }, onDelete: 'CASCADE' });
Message.belongsTo(User, { as: 'sent_message', foreignKey: { name: 'sender_id' }, onDelete: 'CASCADE' });
User.hasMany(Message, { as: 'receiver_message', foreignKey: { name: 'receiver_id' }, onDelete: 'CASCADE' });
Message.belongsTo(User, { as: 'received_message', foreignKey: { name: 'receiver_id' }, onDelete: 'CASCADE' });

User.hasMany(Review, { as: 'sender_review', foreignKey: { name: 'sender_id' }, onDelete: 'CASCADE' });
Review.belongsTo(User, { as: 'sent_reviews', foreignKey: { name: 'sender_id' }, onDelete: 'CASCADE' });
User.hasMany(Review, { as: 'receiver_review', foreignKey: { name: 'receiver_id' }, onDelete: 'CASCADE' });
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
