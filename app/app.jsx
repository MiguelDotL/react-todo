import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route,
        Router,
        IndexRoute,
        hashHistory } from 'react-router';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});


var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!sass!styles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,

  document.getElementById('app')
);
