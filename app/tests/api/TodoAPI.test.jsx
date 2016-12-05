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
})
