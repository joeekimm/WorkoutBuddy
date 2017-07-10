import React from 'react';

const PopCities = ({ city }) => (
  <option value={city.lat}>{city.name}</option>
);

export default PopCities;
