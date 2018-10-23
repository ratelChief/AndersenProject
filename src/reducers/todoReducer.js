import { ADD_TODO, REMOVE_TODO, TODOLIST } from '../constants/todo.constants.js';

import {
  saveToLocalStorage,
  getFromLocalStorage,
  deleteFromLocalStorage
} from '../utils.js';

const initialState = {
  todoList: getFromLocalStorage(TODOLIST)
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TODO:

    saveToLocalStorage(TODOLIST, state.todoList, action.payload);

    return {
      ...state,
      todoList: [
        ...state.todoList,
        action.payload
      ]
    };

  case REMOVE_TODO:

    deleteFromLocalStorage(TODOLIST, state.todoList, action.payload);

    return {
      ...state,
      todoList: [...state.todoList.filter(todo => todo !== action.payload)]
    };

  default: return state;

  }
};
