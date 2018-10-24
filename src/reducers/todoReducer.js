import { ADD_TODO, REMOVE_TODO, TODO_LIST } from '../constants/todo.constants.js';

import {
  saveToLocalStorage,
  getFromLocalStorage,
  deleteFromLocalStorage
} from '../utils.js';

const initialState = {
  todoList: getFromLocalStorage(TODO_LIST)
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TODO:

    saveToLocalStorage(TODO_LIST, state.todoList, action.payload);

    return {
      ...state,
      todoList: [
        ...state.todoList,
        action.payload
      ]
    };

  case REMOVE_TODO:

    deleteFromLocalStorage(TODO_LIST, state.todoList, action.payload);

    return {
      ...state,
      todoList: [...state.todoList.filter(todo => todo !== action.payload)]
    };

  default: return state;

  }
};
