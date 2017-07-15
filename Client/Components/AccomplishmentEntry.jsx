import React from 'react';

const AccomplishmentEntry = (props) => {
  console.log(props);
  return (
    <div className="accomplishments-entry">
      <img alt="profile" src={props.accomplishment.picture} />
      <div>
        @{props.accomplishment.firstName} {props.accomplishment.lastName}
      </div>
      <p>{props.accomplishment.goal}</p>
    </div>
  );
}

export default AccomplishmentEntry;