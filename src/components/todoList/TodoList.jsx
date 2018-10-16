import React from 'react';

export class TodoList extends React.Component {

  render() {

    const btnAdd = <button>+</button>;
    const btnRemove = <button>-</button>;

    return (
      <div>
        <input type='text' /> {btnAdd}
        <ul>
          <li>value{btnRemove}</li>
        </ul>
      </div>
    );
  }
}
