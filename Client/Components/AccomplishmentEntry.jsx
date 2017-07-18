import React from 'react';

const AccomplishmentEntry = (props) => {
  console.log(props);
  return (
    <div className="accomplishments-entry">
      <div className="badge">
        <img alt="profile" src={props.accomplishment.picture} />
        <span>{props.accomplishment.firstName} {props.accomplishment.lastName}</span>
      </div>
      <p>{props.accomplishment.goal}</p>
    </div>
  );
};

export default AccomplishmentEntry;
