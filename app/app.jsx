import React from 'react';
import ReactDOM from 'react-dom';
import { Route,
        Router,
        IndexRoute,
        hashHistory } from 'react-router';

var actions = require('actions');
var store = require('configureStore').configure();

var TodoApp = require('TodoApp');

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(actions.addTodo('Fuck Off'));
store.dispatch(actions.setSearchText('Fuck'));
store.dispatch(actions.toggleShowCompleted());


$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!sass!styles')

ReactDOM.render(
  <TodoApp />,

  document.getElementById('app')
);
