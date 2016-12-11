import * as redux from 'redux';
import thunk from 'redux-thunk';

import {  authReducer,
          todosReducer,
          searchTextReducer,
          showCompletedReducer  } from 'reducers';


export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    auth: authReducer,
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
