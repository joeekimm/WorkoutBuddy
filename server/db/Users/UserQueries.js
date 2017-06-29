// import Promise from 'bluebird'
const Promise = require('bluebird');

const UserQuerySelectors = require('./UserQuerySelectors');
const db = require('../');

Promise.promisifyAll(db);

export default class UserQueries extends UserQuerySelectors {
  constructor() {
    super();
  }

  async fetchOneUserInfo(id) {
    const queryString = this.getUser(id);
    return await db.queryAsync(queryString);
  }

  async addUser({ body }) {
    const queryString = this.postUser(body);
    return await db.queryAsync(queryString);
  }

  async updateUser({ body }) {
    const queryString = this.putUser(body);
    return await db.queryAsync(queryString);
  }

  async removeUser(id) {
    const queryString = this.deleteUser(id);
    return await db.queryAsync(queryString);
  }
}

// module.exports = {
//   fetchOneUserInfo: (id) => {
//     const queryString = UserQuerySelectors.getUser(id);
//     return db.queryAsync(queryString);
//   }
// }