import React, { Component } from 'react';

import { RECENT_SEARCHES } from '../../constants/location.constants';

import { saveToLocalStorage } from '../../utils.js';

import styles from './Locations.less';

import { Header } from '../header/Header.jsx';
import { Main } from '../main/Main.jsx';

export default class Locations extends Component {

  state = {};

  static getDerivedStateFromProps({ searchedValue, locations }, prevState) {
    if (
      searchedValue &&
      searchedValue !== prevState.searchedValue) {

      const addedinfo = {
        searchBy: searchedValue,
        length: locations.length
      };

      saveToLocalStorage(RECENT_SEARCHES, [
        ...JSON.parse(localStorage.getItem(RECENT_SEARCHES))
      ], addedinfo);

      return { searchedValue };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.setToInitialState();
  }
  render() {

    return (
      <div className={styles.pageContainer}>
        <Header />
        <Main />
      </div>
    );
  }
}
