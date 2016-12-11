import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import * as actions from 'actions';
import firebase from 'app/firebase/';
var store = require('configureStore').configure();
import AppRouter from 'app/router/';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});
store.dispatch(actions.startAddTodos());

$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!sass!styles')



ReactDOM.render(
  <Provider store={store}>
    {AppRouter}
  </Provider>,
  document.getElementById('app')
);
