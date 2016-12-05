var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(1).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'Test Todo';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle is called', () => {
    var id = 42,
        incomplete = false;
    var testTodo = {id: id,
                    text:'Test Completed Status',
                    completed: incomplete };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: [testTodo]});
    expect(todoApp.state.todos[0].completed).toBe(incomplete);

    todoApp.handleToggle(id);
    expect(todoApp.state.todos[0].completed).toBe(!incomplete);
  });




})
