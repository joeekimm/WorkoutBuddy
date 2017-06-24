import  React, { Component } from 'react';
import { login, logout } from '../Actions/LogActions';
import { connect  } from 'react-redux';

interface MyState {}
interface MyProps {
  login: any,
  logout: any,
  isAuthenticated: any,
  profile: any,
  history: object,
}

class Home extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render(){
    const { login, history } = this.props;
    return(
      <div>
        <button onClick={() => {
          console.log('this the history bitch' ,history);
          login(history)
        }}>loginbruh</button>
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
