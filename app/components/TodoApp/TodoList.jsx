import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0){
        return (
          <p className="container__message">Looks like there's nothing to do here.</p>
        )
      }
      return todos.map((todo) => {
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
    return {
      todos: state.todos
    };
  }
)(TodoList);
