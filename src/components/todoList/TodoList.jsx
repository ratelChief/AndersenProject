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

  btnAdd = () => (
    <button onClick={this.onAddBtn}>+</button>
  )

  renderItems = () => (
    this.props.todoList.map(item =>
      <li key={uuidv4()}>
        {item}
        <button
          onClick={() => {
            this.props.removeTodo(item);
          }}
        >-</button>
      </li>)
  )

  render() {
    return (
      <div>
        <input onChange={this.onInputChange} type='text' value={this.state.placeName} /> {this.btnAdd()}
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}
