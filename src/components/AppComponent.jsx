import React, { Component } from 'react';
import styles from './AppComponent.less';
import { Header } from '../components/Header.jsx';
import { Main } from '../components/Main.jsx';
import uuidv4 from 'uuid/v4';

export default class App extends Component {

  state = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchInputValue &&
      nextProps.searchInputValue !== prevState.searchInputValue) {
      localStorage.setItem('recentSearches', JSON.stringify(
        [...JSON.parse(localStorage.getItem('recentSearches')),
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

  getItem = value => <a href='#' className={styles.locationItem} key={uuidv4()}>
    {value}
  </a>
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
