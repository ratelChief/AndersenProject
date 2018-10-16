import { ADD_TODO, REMOVE_TODO } from '../constants/todo.constants.js';

const initialState = {
  todoList: []
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TODO:
    return {
      ...state,
      todoList: action.payload
    };

  case REMOVE_TODO:
    return {
      ...state
    };

  default: return state;

  }
};
