const faker = require('faker');

const LALat = 34.0522;
const LALng = -118.244;
const UserData = [];
const boundingCoords = (from, to, fixed) => (Math.random() * (to - from) + from).toFixed(fixed) * 1
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
;
for (let i = 0; i < 50; i++) {
  const person = {
    model: 'User',
    data: {},
  };
  person.data.id = `auth0|${faker.random.number()}`;
  person.data.firstName = faker.name.firstName();
  person.data.lastName = faker.name.lastName();
  person.data.personalityType = 'introvert';
  person.data.lat = boundingCoords(LALat, 34.0722, 4)
  person.data.lng = boundingCoords(LALng, -118.500, 3)
  UserData.push(person);
}

const person = {
  model: 'User',
  data: {},
};
person.data.id = 'google-oauth2|117140262370862653672';
person.data.firstName = faker.name.firstName();
person.data.lastName = faker.name.lastName();
person.data.personalityType = 'introvert';
person.data.lat = boundingCoords(LALat, 34.0722, 4)
person.data.lng = boundingCoords(LALng, -118.500, 3)
UserData.push(person);


module.exports = UserData;
