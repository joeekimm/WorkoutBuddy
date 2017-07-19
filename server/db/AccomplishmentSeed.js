const faker = require('faker');

const accomplishments = [];

for (let i = 1; i < 50; i++) {
  const accomplishment = {
    model: 'Accomplishment',
    data: {},
  };
  accomplishment.data.id = i;
  accomplishment.data.goal = faker.lorem.paragraph();
  accomplishment.data.user_id = 'google-oauth2|117140262370862653672';
  accomplishment.data.date = new Date();
  accomplishments.push(accomplishment);
}

module.exports = accomplishments;
