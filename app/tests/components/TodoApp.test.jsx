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

    var testTodo = todoApp.state.todos[0];
    expect(testTodo.text).toBe(todoText);
    expect(testTodo.createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle is called', () => {
    var id = 42,
        incomplete = false;
    var testData = {id: 42,
                    text:'Test Completed Status',
                    completed: incomplete,
                    createdAt: 0,
                    completedAt: undefined
                    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    // var testTodo = todoApp.state.todos[0];

    todoApp.setState({todos: [testData]});
    expect(todoApp.state.todos[0].completed).toBe(incomplete);

    todoApp.handleToggle(42);
    expect(todoApp.state.todos[0].completed).toBe(!incomplete);
    // expect(testTodo.completedAt).toBeA('number');
  });

  it('should completedAt when completed is toggled off', () => {
    var id = 42,
        complete    = true,
        createdAt   = 1480979458,
        completedAt = createdAt + 100;
    var testData = {id: id,
                    text:'Test completedAt removal',
                    completed:    complete,
                    createdAt:    createdAt,
                    completedAt:  completedAt};
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: [testData]});
    expect(todoApp.state.todos[0].completed).toBe(complete);
    expect(todoApp.state.todos[0].completedAt).toBe(completedAt);

    todoApp.handleToggle(id);
    expect(todoApp.state.todos[0].completed).toBe(!complete);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  });




})
