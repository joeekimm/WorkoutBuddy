import { combineReducers } from 'redux';
import auth from './AuthReducer';
import cities from './FetchCitiesReducer';

const RootReducer = combineReducers({
  auth,
  cities,
});

export default RootReducer;
