import Promise from 'bluebird';
import AccomplishmentQuerySelectors from './AccompolishmentQuerySelectors';
import db from '../';

Promise.promisifyAll(db);

export default class AccomplishmentQueries extends AccomplishmentQuerySelectors {
  constructor() {
    super();
  }
  async postAccomplishment(body) {
    const queryString = super.postAccomplishment(body);
    const accomplishments = db.query(queryString);
    return accomplishments;
  }
  async getAccomplishments(id) {
    const queryString = await super.getAccomplishments(id);
    const accomplishment = await db.query(queryString);
    return accomplishment;
  }
}
