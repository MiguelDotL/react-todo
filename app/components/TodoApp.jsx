var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');


var TodoApp = React.createClass({

      getInitialState: function() {
        return {
          todos: [
            {
              id: 1,
              text: "Walk the dog"
            },
            {
              id: 2,
              text: "Feed the cat"
            },
            {
              id: 3,
              text: "Feed the cat to the dog"
            },
            {
              id: 4,
              text: "Mop the floor"
            },
          ]
        };
      },

      handleAddTodo: function(text) {
        alert('new todo: ' + text)
      },

      render: function() {
        var {todos} = this.state

        return (
          <div>
            <div className="row">
              <div className="columns small-centered medium-6 large-4">
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
              </div>
            </div>
          </div>
        );
      }
    });

module.exports = TodoApp;
