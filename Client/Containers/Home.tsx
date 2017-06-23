import  React, { Component } from 'react';
import { login, logout } from '../Actions/LogActions';
import { connect  } from 'react-redux';
import Auth from '../Components/Auth';

interface MyState {}
interface MyProps {
  login: any,
  logout: any,
  isAuthenticated: any,
  profile: any,
}

class Home extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
  }

  render(){
    const { isAuthenticated, profile } = this.props;
    return(
      <div>
        <Auth
          isAuthenticated={isAuthenticated}
          profile={profile}
          onLoginClick={this.props.login}
          onLogoutClick={this.props.logout}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { auth } = state;
  const { isAuthenticated, profile } = auth;
  return {
    isAuthenticated,
    profile,
  }
}

export default connect(mapStateToProps, {
  login,
  logout
})(Home);
