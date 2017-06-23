import React, { Component } from 'react';
import { login, logout } from '../Actions/LogActions';
import { connect } from 'react-redux';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { login } = this.props;
        return (React.createElement("div", null,
            React.createElement("button", { onClick: login }, "loginbruh")));
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