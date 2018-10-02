import React, { Component } from 'react';
import styles from './Locations.less';
import { Header } from '../components/Header.jsx';
import { Main } from '../components/Main.jsx';
import { Link } from 'react-router-dom';

import uuidv4 from 'uuid/v4';
import { RECENT_SEARCHES } from '../constants/location.constants';

export default class App extends Component {

  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchInputValue &&
      nextProps.searchInputValue !== prevState.searchInputValue) {
      localStorage.setItem(RECENT_SEARCHES, JSON.stringify(
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

  getItem = value => <Link to='/RealtyList' className={styles.locationItem} key={uuidv4()}>
    {value}
  </Link>
  render() {
    const {
      getStatus,
      onGoButton,
      locationsArray,
      onMyLocationButton,
      recentSearches
    } = this.props;

    const locationList =
    locationsArray.map(
      location => this.getItem(location.title)
    );

    const recentSearchesList =
    recentSearches.map(
      search => this.getItem(`${search.searchBy} (${search.length})`)
    );

    return (
      <div className={styles.pageContainer}>
        <Header />
        <Main
          data={ getStatus }
          onGoButton={ onGoButton }
          locationList={ locationList }
          onMyLocationButton={ onMyLocationButton }
          recentSearches={ recentSearchesList }
        />
      </div>
    );
  }
}
