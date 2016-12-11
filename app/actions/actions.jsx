import  moment from 'moment';
import  firebase,
      { firebaseRef,
        githubProvider } from 'app/firebase/';


// -------- Authentication Actions --------
export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('OAuth worked!', result);
    }, (error) => {
      console.log('Unable to authorize.', error);
    });
  };
};


export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Signed Out');
    });
  };
};


// -------- Todo Item Actions --------
// ---- Create Todo ----
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

// ---- Update Todo ----
export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    }

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    })
  };
};


// -------- TodoList Actions --------
// ---- List Propagation ----
export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodos = (text) => {
  return (dispatch, getState) => {
    // create data and store it in a variable
    var todosRef = firebaseRef.child('todos');

    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });
      dispatch(addTodos(parsedTodos));
    });
  };
};


// ---- List Filtering ----
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
