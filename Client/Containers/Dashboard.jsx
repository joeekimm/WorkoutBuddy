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
      <div>
        dashboard hooooooreee
        <button onClick={() => {
          logout(history);
        }}
        >logout</button>
      </div>
    );
  }
}

export default connect(null, { logout })(Dashboard);
