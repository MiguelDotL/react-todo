import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route,
        Router,
        IndexRoute,
        hashHistory } from 'react-router';

import * as actions from 'actions';
var store = require('configureStore').configure();
import TodoApp from 'TodoApp';
var TodoAPI = require('TodoAPI');
import Login from 'Login';

store.dispatch(actions.startAddTodos());

$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!sass!styles')

ReactDOM.render(
  <Provider store={store}>

    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login} />
        <Route path="todos" component={TodoApp} />
      </Route>
    </Router>

  </Provider>,
  document.getElementById('app')
);
