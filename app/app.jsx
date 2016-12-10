import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route,
        Router,
        IndexRoute,
        hashHistory } from 'react-router';

import * as actions from 'actions';
var store = require('configureStore').configure();
var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!sass!styles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,

  document.getElementById('app')
);
