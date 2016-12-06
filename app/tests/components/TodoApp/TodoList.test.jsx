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

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todoItems = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todoItems.length).toBe(todos.length);
  });

  it('should render an empty message if there are no todo items', () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
})
