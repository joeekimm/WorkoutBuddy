import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import reducers from '../Reducers/RootReducer';
import Home from './Home';
import Dashboard from './Dashboard';
import WorkoutInfo from '../Components/Workoutinfo';

const store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxPromise));


const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/workoutinfo" component={WorkoutInfo} />
      </Switch>
    </Provider>
  </BrowserRouter>
    );

export default App;
