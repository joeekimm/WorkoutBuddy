import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ logout, history }) => (
  <div className="side-bar">
    <div className="side-header" />
    <button className="matches">See Matches</button>
    <div className="accomplishments">
      <button>
        <Link to="/dashboard/accomplishments">
          <i className="fa fa-eye" aria-hidden="true" />
          accomplishments
        </Link>
      </button>
      <button>
        <i className="fa fa-dropbox" aria-hidden="true" />
      accomplishments</button>
    </div>
    <div className="workouts">
      <button>
        <i className="fa fa-upload" aria-hidden="true" />
      workout</button>
      <button>
        <i className="fa fa-eye" aria-hidden="true" />
      workouts </button>
    </div>
    <div className="profile">
      <button>
        <i className="fa fa-user-circle" aria-hidden="true" />
      profile
    </button>
      <button>
        <i className="fa fa-comments-o" aria-hidden="true" />
      messages
    </button>
    </div>
    <button onClick={() => logout(history)} className="logout">LOGOUT</button>
  </div>
);

export default Nav;
