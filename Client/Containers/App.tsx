import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { compose,createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../Reducers/RootReducer';
import {persistStore, autoRehydrate} from 'redux-persist'
import Home from './Home';
import Dashboard from './Dashboard';
import WorkoutInfo from '../Components/Workoutinfo';

let store = createStore(reducers,applyMiddleware(ReduxThunk));


class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <BrowserRouter>
              <Provider store={store}>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/workoutinfo" component={WorkoutInfo}/>
                </Switch>
              </Provider>
            </BrowserRouter>
        );
    }
}

export default App;