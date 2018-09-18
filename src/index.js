import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.js';

class App extends Component {
  render() {
    return (
      <div>
         <p> Hello new project</p>
        <AwesomeComponent />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
