var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import * as actions from 'actions';
import { Todo } from 'Todo';


describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  // -------- BROKEN --------
  it('should dispatch UPDATE_TODO action onClick', () => {
    var id = 42,
        completed = true;
    var testTodo = {id,
                    text:'Test Completed Status',
                    completed };
    var action = actions.startToggleTodo(testTodo.id, !testTodo.completed)                ;

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...testTodo} dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
