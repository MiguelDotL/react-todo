var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(1).toExist();
  });

  it('should call onToggle prop with \'id\' onClick', () => {
    var id = 42,
        complete = true;
    var testTodo = {id: id,
                    text:'Test Completed Status',
                    completed: complete };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...testTodo} onToggle={spy} />);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(id);
  });
})
