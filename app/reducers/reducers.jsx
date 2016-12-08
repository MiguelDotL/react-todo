import uuid from 'node-uuid';
import moment from 'moment';


export var searchTextReducer = (state='', action) => {
  switch (action.type) {

    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state=false, action) => {
  switch (action.type) {

    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state=[], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
      // add case for TOGGLE_TOOD find id set completed to !state and updateCompletedAt: undefined
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          var toggledStatus = !todo.completed

          return {
            ...todo,
            completed: toggledStatus,
            completedAt: toggledStatus ? moment().unix() : undefined
          };
        }
      });
    default:
      return state;
  };
};
