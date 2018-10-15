import React from 'react';

export class TodoList extends React.Component {

  componentDidMount() {
    console.log('mounted');
  }

  render() {

    const btnAdd = '+';
    const btnRemove = '-';

    return (
      <div>
        <input type='text' />
        <ul>
          <li>value{btnAdd}{btnRemove}</li>
        </ul>
      </div>
    );
  }
}
