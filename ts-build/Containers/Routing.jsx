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
        return (<BrowserRouter>
              <Provider store={store}>
                <Switch>
                  <Route path="/" component={Home}/>
                </Switch>
              </Provider>
            </BrowserRouter>);
    }
}
export default App;
//# sourceMappingURL=Routing.jsx.map