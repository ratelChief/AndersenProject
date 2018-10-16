import { ADD_TODO, REMOVE_TODO } from '../constants/todo.constants';

export const addTodo = data => ({
  type: ADD_TODO,
  payload: data
});

export const removeTodo = data => ({
  type: REMOVE_TODO,
  payload: data
});
