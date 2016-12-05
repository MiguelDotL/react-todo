var React = require('react');
var uuid = require('node-uuid');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');


var TodoApp = React.createClass({

      getInitialState: function() {
        return {
          showCompleted: false,
          searchText: '',
          todos: [
            {
              id: uuid(),
              text: "Walk the dog"
            },
            {
              id: uuid(),
              text: "Feed the cat"
            },
            {
              id: uuid(),
              text: "Feed the cat to the dog"
            },
            {
              id: uuid(),
              text: "Mop the floor"
            },
          ]
        };
      },

      handleAddTodo: function(text) {
        this.setState({
          todos: [
            ...this.state.todos,
            {
              id: uuid(),
              text: text
            }
          ]
        })
      },

      handleSearch: function(showCompleted, searchText) {
        this.setState({
          showCompleted: showCompleted,
          searchText: searchText.toLowerCase()
        });
      },

      render: function() {
        var {todos} = this.state

        return (
          <div>
            <div className="row">
              <h1 className="page-title">My Todos</h1>
              <div className="columns small-centered medium-6 large-4">
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
              </div>
            </div>
          </div>
        );
      }
    });

module.exports = TodoApp;
