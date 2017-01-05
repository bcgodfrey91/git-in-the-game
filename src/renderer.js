import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import auth from './reducers/auth';
import modStartDates from './reducers/modStartDates';
import rootReducer from './reducers/index'
import Home from './components/Home';
import Settings from './components/Settings';
import App from './components/App';
import Repos from './components/Repos';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Settings} />
        <Route path='/home' component={Home} />
        <Route path='/repos' component={Repos} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
