import React, { Component } from 'react';
class Auth extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onLoginClick, onLogoutClick, isAuthenticated, profile } = this.props;
        return (React.createElement("div", { style: { marginTop: '10px' } }, !isAuthenticated ? (React.createElement("ul", { className: "list-inline" },
            React.createElement("li", null,
                React.createElement("button", { className: "btn btn-primary", onClick: onLoginClick }, "Login")))) : (React.createElement("ul", { className: "list-inline" },
            React.createElement("li", null,
                React.createElement("img", { src: profile.picture, height: "40px" })),
            React.createElement("li", null,
                React.createElement("span", null,
                    "Welcome, ",
                    profile.nickname)),
            React.createElement("li", null,
                React.createElement("button", { className: "btn btn-primary", onClick: onLogoutClick }, "Logout"))))));
    }
}
export default Auth;
//# sourceMappingURL=Auth.js.map