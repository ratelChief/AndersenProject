import { connect } from 'react-redux';

import { TodoList } from '../components/todolist/TodoList.jsx';

import { addTodo, removeTodo } from '../actions/todoAction';

const mapStateToProps = ({
  todos: {
    todoList
  }
}) => ({
  todoList
});

const mapDispatchToProps = {
  addTodo,
  removeTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
