import Promise from 'bluebird';
// const Promise = require('bluebird');
import UserQuerySelectors from './UserQuerySelectors';
// const UserQuerySelectors = require('./UserQuerySelectors');
import db from '../';
// const db = require('../');

Promise.promisifyAll(db);

export default class UserQueries extends UserQuerySelectors {
  constructor() {
    super();
  }

  async fetchOneUserInfo(id) {
  // fetchOneUserInfo(id) {
    const queryString = super.getUser(id);
    // const result = db.queryAsync(queryString);
    const result = db.query(queryString);
    return result;
  }

  async addUser(body) {
    const queryString = super.postUser(body);
    const result = db.query(queryString);
    return result;
    // return await db.queryAsync(queryString);
  }

  async updateUser({ body }) {
    const queryString = super.putUser(body);
    const result = db.query(queryString);
    return result;
    // return await db.queryAsync(queryString);
  }

  async removeUser(id) {
    const queryString = super.deleteUser(id);
    const result = db.query(queryString);
    return result;
    // return await db.queryAsync(queryString);
  }

  async fetchNearbyUsers(lat) {
    const queryString = super.findNearbyUsers(lat);
    const result = db.query(queryString);
    return result;
  }
}

// module.exports = {
//   fetchOneUserInfo: (id) => {
//     const queryString = UserQuerySelectors.getUser(id);
//     return db.queryAsync(queryString);
//   }
// }