import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../Reducers/RootReducer';
import Home from './Home';
import Dashboard from './Dashboard';
import WorkoutInfo from '../Components/Workoutinfo';

let store = createStore(reducers,applyMiddleware(ReduxThunk));


class App extends Component {
    constructor(props) {
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