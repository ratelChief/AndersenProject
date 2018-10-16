import React from 'react';

export class TodoList extends React.Component {

  onInputChange = evt => {
    const value = evt.target.value;
  };

  onAddBtn = () => {

  }

  render() {
    const btnAdd = <button onClick={this.onAddBtn}>+</button>;
    const btnRemove = <button>-</button>;

    return (
      <div>
        <input onChange={this.onInputChange} type='text' /> {btnAdd}
        <ul>
          <li>value{btnRemove}</li>
        </ul>
      </div>
    );
  }
}
