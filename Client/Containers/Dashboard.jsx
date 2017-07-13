import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../Actions/LogActions';


class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    const { logout, history } = this.props;
    return (
      <div className="dashboard">
        <div className="side-bar">
          <div className="side-header" />
          <button className="matches">See Matches</button>
          <div className="accomplishments">
            <button>
              <i className="fa fa-eye" aria-hidden="true" />
                  accomplishments
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
        <div className="dash-content">
          rest of content
        </div>
      </div>
    );
  }
}
{ /* <button onClick={() => {*/ }
{ /* logout(history);*/ }
{ /* }}*/ }
{ /* >logout</button>*/ }

export default connect(null, { logout })(Dashboard);
