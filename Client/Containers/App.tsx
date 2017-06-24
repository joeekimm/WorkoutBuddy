import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {  createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../Reducers/RootReducer';
import Home from './Home';
import Dashboard from './Dashboard';


let store = createStore(reducers,applyMiddleware(ReduxThunk));

interface MyProps {
  path: string,
  component: any,
}
interface MyState {}

class App extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
    }

    render() {
        return(
            <BrowserRouter>
              <Provider store={store}>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/dashboard" component={Dashboard}/>
                </Switch>
              </Provider>
            </BrowserRouter>
        );
    }
}

export default App;