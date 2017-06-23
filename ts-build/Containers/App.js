import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Home from '../Components/Home';
let store = createStore(applyMiddleware());
class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (React.createElement(BrowserRouter, null,
            React.createElement(Provider, { store: store },
                React.createElement(Switch, null,
                    React.createElement(Route, { path: "/", component: Home })))));
    }
}
export default App;
//# sourceMappingURL=App.js.map