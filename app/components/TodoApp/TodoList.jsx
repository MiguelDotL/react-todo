import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export var TodoList = React.createClass({
  render: function() {
    var { todos, showCompleted, searchText } = this.props;
    var renderTodos = () => {
      let filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (filterTodos.length === 0){
        return (
          <p className="container__message">Looks like there's nothing to do here.</p>
        )
      }
      return filterTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
