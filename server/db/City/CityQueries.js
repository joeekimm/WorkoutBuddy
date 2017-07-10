import Promise from 'bluebird';
import CityQuerySelectors from './CityQuerySelector';
import db from '../';

Promise.promisifyAll(db);

export default class CityQueries extends CityQuerySelectors {
  constructor() {
    super();
  }

  async getCities() {
    console.log('we hit the city queriessss')
    const queryString = await super.getCities();
    console.log(queryString);
    const City = await db.query(queryString);
    console.log(City);
    return City;
  }
}
