import expect from 'expect';
var actions = require('actions');

describe('Actions', () => {

  it('should generate searchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'someSearchText!'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });


  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });


  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Doo Stuuuufffff'
    };

    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });


  it('should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TOOD',
      id: '123'
    };

    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

});
