import React, { Component } from 'react';
import styles from './AppComponent.less';
import { Header } from '../components/Header.jsx';
import { Main } from '../components/Main.jsx';
import uuidv4 from 'uuid/v4';

export default class App extends Component {

  state = {};

  static getDerivedStateFromProps(props, state) {
    if (props.locationsArray !== undefined) {
      try {
        localStorage.setItem(JSON.stringify(props.searchInputValue), JSON.stringify(
          [{
            searchBy: props.searchInputValue,
            length: props.locationsArray.length
          }])
        );
      } catch (err) {
        return null;
      }
    }
    return null;
  }

  render() {
    const { getStatus, onGoButton, locationsArray, onMyLocationButton } = this.props;
    const locationList = locationsArray.map(location =>
      <a href='#' className={styles.locationItem} key={uuidv4()}>{location.title}</a>);
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
