var $ = require('jquery');

module.exports = {
  // setTodos: function(todos) {
  //     // if($.isArray(todos)) {
  //     if($.isArray(todos)) {
  //       localStorage.setItem('todos', JSON.stringify(todos));
  //       return todos;
  //     }
  // },
  // getTodos: function() {
  //   var stringTodos = localStorage.getItem('todos');
  //   var todos = [];
  //
  //   try {
  //     todos = JSON.parse(stringTodos);
  //   } catch(e) {
  //
  //   }
  //
  //   return ($.isArray(todos)) ? todos : [];
  // },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;

    })

    // sort by completion status
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1; // move 'a' down in TodoList
      } else if (a.completed && !b.completed) {
        return 1;  // move 'a' up in TodoList
      } else {
        return 0;  // 'a' and 'b' are identical, do nothing
      }
    })


    return filteredTodos;

  },

};
