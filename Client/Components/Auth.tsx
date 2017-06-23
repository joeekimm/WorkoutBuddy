import React, { Component } from 'react'

interface MyProps {
  onLoginClick: any,
  onLogoutClick: any,
  isAuthenticated: any,
  profile: any,
}
interface MyState {}

class Auth extends Component<MyProps,MyState> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { onLoginClick, onLogoutClick, isAuthenticated, profile } = this.props
    return (
      <div style={{ marginTop: '10px' }}>
        { !isAuthenticated ? (
          <ul className="list-inline">
            <li><button className="btn btn-primary" onClick={onLoginClick}>Login</button></li>
          </ul>
        ) : (
          <ul className="list-inline">
            <li><img src={profile.picture} height="40px" /></li>
            <li><span>Welcome, {profile.nickname}</span></li>
            <li><button className="btn btn-primary" onClick={onLogoutClick}>Logout</button></li>
          </ul>
        )}
      </div>
    )
  }
}

export default Auth;