import Promise from 'bluebird';
import UserQuerySelectors from './UserQuerySelectors';
import db from '../';

Promise.promisifyAll(db);

export default class UserQueries extends UserQuerySelectors {
  constructor() {
    super();
  }

  async fetchOneUserInfo(id) {
    const queryString = super.getUser(id);
    const result = db.query(queryString);
    return result;
  }

  async addUser(body) {
    const queryString = super.postUser(body);
    const result = db.query(queryString);
    return result;
  }

  async updateUser({ body }) {
    const queryString = super.putUser(body);
    const result = db.query(queryString);
    return result;
  }

  async removeUser(id) {
    const queryString = super.deleteUser(id);
    const result = db.query(queryString);
    return result;
  }

  async fetchNearbyUsers(lat) {
    const queryString = super.findNearbyUsers(lat);
    const result = db.query(queryString);
    return result;
  }
}
