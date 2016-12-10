import React from 'react';
import { Route,
        Router,
        IndexRoute,
        hashHistory } from 'react-router';

import * as actions from 'actions';
import firebase from 'app/firebase/';
import TodoApp from 'TodoApp';
import Login from 'Login';

// redirect to '/' if not logged in
var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

// redirect to '/todos' if logged in
var redirectIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};



export default(
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
      <Route  path="todos" component={TodoApp} onEnter={requireLogin} />
    </Route>
  </Router>
);
