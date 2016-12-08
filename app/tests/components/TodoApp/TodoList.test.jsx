var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Thing 1',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }, {
        id: 2,
        text: 'Thing 2',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todoItems = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todoItems.length).toBe(todos.length);
  });


  it('should render an empty message if there are no todo items', () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
})
