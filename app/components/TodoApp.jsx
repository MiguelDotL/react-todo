import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
      render: function() {
        return (
          <div>
            <div className="row">
              <h1 className="page-title">My Todos</h1>
              <div className="columns small-centered small-11 medium-6 large-5">
                <div className="container">
                  <TodoSearch />
                  <TodoList />
                  <AddTodo />
                </div>
              </div>
            </div>
          </div>
        );
      }
    });

module.exports = TodoApp;
