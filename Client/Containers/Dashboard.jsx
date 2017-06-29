import React, { Component } from 'react';
import { logout } from '../Actions/LogActions';
import { connect } from 'react-redux';


class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    const { logout, history } = this.props;
    return(
      <div>
        dashboard hoooooor
        <button onClick={() => {
          logout(history);
        }}>logout</button>
      </div>
    );
  }
}

export default connect(null, { logout })(Dashboard);
