import moment from 'moment';
import firebase, { firebaseRef } from 'app/firebase/';


export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};


export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};


export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};


export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    // create data and store it in a variable
    var todo = {  text,
                  completed: false,
                  createdAt: moment().unix(),
                  completedAt: null
    };
    // save data to firebase
    var todoRef = firebaseRef.child('todos').push(todo);

    // dispatch non-async action to update view
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};


export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};


export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
