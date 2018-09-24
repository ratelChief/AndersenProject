import React, { Component } from 'react';

import { Header } from '../components/Header.jsx';
import { Main } from '../components/Main.jsx';

export default class App extends Component {

  render() {
    const { getStatus, onGoButton, locationsArray } = this.props;
    const locationList = locationsArray.map(location =>
      <a href='#' key={location.place_name}>{location.title}</a>);
      return (
        <div>
          <Header />
          <Main
            data={ getStatus }
            onGoButton={ onGoButton }
            locationList={ locationList }
          />
        </div>
      );
    }
  }
