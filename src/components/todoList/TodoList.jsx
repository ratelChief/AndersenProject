import React from 'react';
import uuidv4 from 'uuid/v4';

export class TodoList extends React.Component {

  state = { placeName: '' };

  onInputChange = evt => {
    this.setState({
      placeName: evt.target.value
    });
  }

  onAddBtn = () => {
    this.props.addTodo(this.state.placeName);
  }

  render() {
    const btnAdd = <button onClick={this.onAddBtn}>+</button>;
    const btnRemove = <button>-</button>;

    const renderItem = this.props.todoList.map(item => <li key={uuidv4()}>{item}{btnRemove}</li>);

    return (
      <div>
        <input onChange={this.onInputChange} type='text' /> {btnAdd}
        <ul>
          {renderItem}
        </ul>
      </div>
    );
  }
}
