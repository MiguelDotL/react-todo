var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
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
