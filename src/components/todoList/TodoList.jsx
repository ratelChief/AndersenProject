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

  onRemoveBtn = e => {
    console.log(e.currentTarget.parentNode);
    this.props.removeTodo(this.state.placeName);
  }

  render() {
    const { todoList } = this.props;
    const btnAdd = <button onClick={this.onAddBtn}>+</button>;
    const btnRemove = <button onClick={this.onRemoveBtn}>-</button>;

    const renderItem = todoList.map(item => <li key={uuidv4()}>{item} {btnRemove} </li>);

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
