import Promise from 'bluebird';
import CityQuerySelectors from './CityQuerySelector';
import db from '../';

Promise.promisifyAll(db);

export default class CityQueries extends CityQuerySelectors {
  constructor() {
    super();
  }

  async getCities() {
    const queryString = await super.getCities();
    const City = await db.query(queryString);
    return City;
  }
}
