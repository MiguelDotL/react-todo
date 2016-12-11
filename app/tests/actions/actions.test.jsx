import firebase, { firebaseRef } from 'app/firebase';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

var actions = require('actions');
var createMockStore = configureMockStore([thunk]);


describe('Actions', () => {

  // -------- Auth Action Tests --------
  it('should generate a login action object', () => {
    const action = {
      type: 'LOGIN',
      uid: '123uid'
    }
    const res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('should generate a logout action object', () => {
    const action = {
      type: 'LOGOUT'
    }
    const res = actions.logout(action);

    expect(res).toEqual(action);
  });

  // -------- List Filtering Tests --------
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



  // -------- Todo Item Tests --------
  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '111',
        text: 'Lorem',
        completed: false,
        createdAt: 54321,
      }
    };

    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should create Todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'Test todo item';

    // Async test with thunk mockStore
    // -- once action has completed and todo data exists in mockStore
    //    call done();
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({ type: 'ADD_TODO' });
      expect(actions[0].todo).toInclude({ text: todoText });
      done();
    }).catch(done);
  });

  // -------- Todo List Tests --------
  it('should generate addTodos action object', () => {
    var todos = [{
      id: '111',
      text: 'Lorem',
      completed: false,
      completedAt: undefined,
      createdAt: 54321
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate updateTodo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: { completed: false }
    };

    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

// -------- ASYNC Firebase Tests --------
  describe('Firebase Todos Tests', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({   text: 'Lorem',
                                  completed: false,
                                  createdAt: 54321
        })
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });


    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude(
          { type: 'UPDATE_TODO', id: testTodoRef.key }
        );
        expect(mockActions[0].updates).toInclude({ completed: true });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done);

    });

    it('should populate TodoList dispatch ADD_TODOS action', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Lorem');
        done();
      }, done);

    });
  });

});
