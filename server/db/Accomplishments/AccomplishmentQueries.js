import Promise from 'bluebird';
import AccomplishmentQuerySelectors from './AccompolishmentQuerySelectors';
import db from '../';

Promise.promisifyAll(db);

export default class AccomplishmentQueries extends AccomplishmentQuerySelectors {
  constructor() {
    super();
  }
  async postAccomplishment(body) {
    console.log(body, 'this is the body line 12 accomp queries');
    const queryString = super.postAccomplishment(body);
    const accomplishments = db.query(queryString);
    return accomplishments;
  }
  async getAccomplishments(id) {
    console.log(id, 'this is the id line 18 accomp queries')
    const queryString = await super.getAccomplishments(id);
    const accomplishment = await db.query(queryString);
    console.log(accomplishment);
    return accomplishment;
  }
}
