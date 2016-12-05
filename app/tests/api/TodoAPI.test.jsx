var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });


  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var id = 42,
          text = 'test text';
      var todos = [{
        id: id,
        text: text,
        completed: false
      }];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should NOT set invalid todos array', () => {
      var badTodos = 'string';

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });


  describe('getTodos', () => {
    it('should return todos if valid array is in localStorage', () => {

      var id = 42,
      text = 'test text';
      var todos = [{
        id: id,
        text: text,
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos))
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });

    it('should return an empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });
  });


  describe('filterTodos', () => {

    var id = 42,
    text = 'test text';
    var todos = [{
      id: id,
      text: text,
      completed: true
    },{
      id: id+1,
      text: 'more ' + text,
      completed: false
    },{
      id: id+2,
      text: 'even more ' + text + '!!!',
      completed: true
    }];


    it('should return ALL todos if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toEqual(3);
    });

    it('should ONLY return incomplete todos if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toEqual(1);
    });

    it('should sort todos by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toEqual(3);
      expect(filteredTodos[0].completed).toEqual(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'more');

      expect(filteredTodos.length).toEqual(2);
    });

    it('should return ALL todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toEqual(3);
    });
  });
})
