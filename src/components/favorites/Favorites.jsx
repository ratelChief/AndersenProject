import React from 'react';
import RealtyList from '../realtyList/RealtyList.jsx';

import styles from './Favorites.less';

export class Favorites extends React.Component {

  componentWillUnmount() {
    this.props.setInitState();
  }

  render() {
    const { searchResults, totalResults, getData } = this.props;

    return (
      <div className={styles.pageContainer}>
        <h3 className={styles.pageTitle}>Favorites</h3>
        <RealtyList
          className={styles.pageContent}
          searchResults={searchResults}
          totalResults={totalResults}
          getData={getData}
        />
      </div>
    );
  }

}
