import React, { Component } from 'react';
import { login, logout } from '../Actions/LogActions';
import { connect } from 'react-redux';
import Auth from '../Components/Auth';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isAuthenticated, profile } = this.props;
        return (React.createElement("div", null,
            React.createElement(Auth, { isAuthenticated: isAuthenticated, profile: profile, onLoginClick: this.props.login, onLogoutClick: this.props.logout })));
    }
}
const mapStateToProps = (state) => {
    const { auth } = state;
    const { isAuthenticated, profile } = auth;
    return {
        isAuthenticated,
        profile,
    };
};
export default connect(mapStateToProps, {
    login,
    logout
})(Home);
//# sourceMappingURL=Home.js.map