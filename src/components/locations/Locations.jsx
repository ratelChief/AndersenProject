import React, { Component } from 'react';

import { RECENT_SEARCHES } from '../../constants/location.constants';

import styles from './Locations.less';

import { Header } from '../header/Header.jsx';
import { Main } from '../main/Main.jsx';

export default class App extends Component {

  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.searchInputValue &&
      nextProps.searchInputValue !== prevState.searchInputValue) {
      localStorage.setItem(
        RECENT_SEARCHES,
        JSON.stringify(
          [...JSON.parse(localStorage.getItem(RECENT_SEARCHES)),
            {
              searchBy: nextProps.searchInputValue,
              length: nextProps.locationsArray.length
            }
          ])
      );
      return { searchInputValue: nextProps.searchInputValue };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.setInitState();
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
