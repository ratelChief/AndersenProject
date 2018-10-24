import React from 'react';
import uuidv4 from 'uuid/v4';

export class TodoList extends React.Component {

  state = {
    placeName: ''
  };

  onInputChange = evt => {
    this.setState({
      placeName: evt.target.value
    });
  }

  onAddBtn = () => {
    this.props.addTodo(this.state.placeName);
  }

  render() {
    const { todoList, removeTodo } = this.props;
    const btnAdd = <button onClick={this.onAddBtn}>+</button>;

    const renderItem = todoList.map(item =>
      <li key={uuidv4()}>
        {item}
        <button
          onClick={() => {
            removeTodo(item);
          }}
        >-</button>
      </li>
    );

    return (
      <div>
        <input onChange={this.onInputChange} type='text' value={this.state.placeName} /> {btnAdd}
        <ul>
          {renderItem}
        </ul>
      </div>
    );
  }
}
