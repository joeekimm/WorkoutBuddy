import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Actions/LogActions';
import NavBar from '../Components/NavBar';
import ContentNav from '../Components/ContentNav';
import AccomplishmentsList from '../Components/AccomplishmentsList';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    const { logout, history } = this.props;
    return (
      <div className="dashboard">
        <NavBar logout={logout} history={history} />
        <div className="dash-content">
          <ContentNav />
          <Route path="/dashboard/accomplishments" component={() => (<AccomplishmentsList />)} />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { logout })(Dashboard));
