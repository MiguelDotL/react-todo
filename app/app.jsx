var React = require('react'),
    ReactDOM = require('react-dom'),
    { Route,
      Router,
      IndexRoute,
      hashHistory } = require('react-router'),

    TodoApp = require('TodoApp');



$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!sass!styles')

ReactDOM.render(
  <TodoApp />,

  document.getElementById('app')
);
