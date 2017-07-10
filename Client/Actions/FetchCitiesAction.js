import axios from 'axios';

export const FETCH_CITIES = 'FETCH_CITIES';
export const URL = '/api/cities/getcities';


export const FetchCitiesAction = async () => {
  const request = await axios.get(URL);
  return {
    type: FETCH_CITIES,
    payload: request,
  };
};
