import React, { Component } from 'react';
import { login } from '../Actions/LogActions';
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    return (
      <div className="home-wrapper">
        <div className="home">
          <div />
          <button onClick={this.props.login}>login</button>
        </div>
        <div className="how-it-works">
          hi
        </div>
      </div>
    )
  }
}

export default connect(null, { login })(Home);