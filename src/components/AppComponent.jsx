import React, { Component } from 'react';
import styles from './AppComponent.less';
import { Header } from '../components/Header.jsx';
import { Main } from '../components/Main.jsx';

export default class App extends Component {

  render() {
    const { getStatus, onGoButton, locationsArray, onMyLocationButton } = this.props;
    const locationList = locationsArray.map(location =>
      <a href='#' className={styles.locationItem} key={location.place_name}>{location.title}</a>);
    return (
      <div className={styles.pageContainer}>
        <Header />
        <Main
          data={ getStatus }
          onGoButton={ onGoButton }
          locationList={ locationList }
          onMyLocationButton={ onMyLocationButton }
        />
      </div>
    );
  }
}
