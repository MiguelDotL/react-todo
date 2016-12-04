var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');
var TodoList = require('TodoList');

describe('TodoList', () => {
  it('should exist', () => {
    expect(1).toExist();
  });

  it('should render one Todo Item for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Thing 1'
      },
      {
        id: 2,
        text: 'Thing 2'
      }
    ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    var todoItems = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosItems.length).toBe(todos.length);
  });
})
