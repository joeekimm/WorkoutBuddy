import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {  createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../Reducers/RootReducer';
import Home from './Home';


let store = createStore(reducers,applyMiddleware(ReduxThunk));

interface MyProps {
  path: string,
  component: any,
}
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