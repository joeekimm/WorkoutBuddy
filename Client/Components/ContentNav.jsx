import React from 'react';

const ContentNav = () => (
  <div className="content-nav">
    <img alt="profile" src={JSON.parse(localStorage.getItem('profile')).picture} />
    <p>{JSON.parse(localStorage.getItem('profile')).name} </p>
  </div>
);

export default ContentNav;
