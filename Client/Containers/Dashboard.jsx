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
            see accomplishments <br />
            post accomplishments
          </div>
          <div className="workouts">
            create workout <br />
            see workouts
          </div>
          <div className="profile">
            profile <br />
            messages
          </div>
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
