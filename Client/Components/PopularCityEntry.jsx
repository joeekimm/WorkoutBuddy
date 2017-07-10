import React from 'react';

const PopCities = ({ city }) => (
  <option value={JSON.stringify(city)}>{city.name}</option>
  );

export default PopCities;
