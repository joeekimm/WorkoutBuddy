
import { FETCH_CITIES } from '../Actions/FetchCitiesAction';

const FetchCitiesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CITIES :
      return action.payload;
    default :
      return state;
  }
};

export default FetchCitiesReducer;

