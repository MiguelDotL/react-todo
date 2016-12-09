import firebase, { firebaseRef } from 'app/firebase';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

var actions = require('actions');
var createMockStore = configureMockStore([thunk]);


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

  // -------- BROKEN --------
  it('should generate updateTodo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: { completed: false }
    };

    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  describe('Firebase Todos Tests', () => {
    var testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();

      testTodoRef.set({
        text: 'Lorem',
        completed: false,
        createdAt: 54321
      }).then(() => done());
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
  });

});
