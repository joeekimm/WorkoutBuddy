import React, { Component } from 'react';
import { logout } from '../Actions/LogActions';
import { connect } from 'react-redux';


interface MyProps {
  logout: ()=> object,
  history: object
}
interface MyState {}

class Dashboard extends Component<MyProps, MyState> {
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
