import React, { Component } from 'react';

import { RECENT_SEARCHES } from '../../constants/location.constants';

import styles from './Locations.less';

import { Header } from '../header/Header.jsx';
import { Main } from '../main/Main.jsx';

export default class App extends Component {

  state = {};

  static getDerivedStateFromProps({ searchedValue, locations }, prevState) {
    if (
      searchedValue &&
      searchedValue !== prevState.searchedValue) {
      localStorage.setItem(
        RECENT_SEARCHES,
        JSON.stringify(
          [...JSON.parse(localStorage.getItem(RECENT_SEARCHES)),
            {
              searchBy: searchedValue,
              length: locations.length
            }
          ])
      );
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
