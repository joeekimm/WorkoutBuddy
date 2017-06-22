import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {  createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import Home from '../Components/Home';


let store = createStore(applyMiddleware());

interface MyProps {}
interface MyState {}

class App extends Component<MyProps, MyState> {
    constructor() {
        super();
    }

    render() {
        return(
            <BrowserRouter>
              <Provider store={store}>
                <Switch>
                  <Route path="/" component={Home}/>
                </Switch>
              </Provider>
            </BrowserRouter>
        );
    }
}

export default App;