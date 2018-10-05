import React from 'react';
import RealtyList from '../realtyList/RealtyList.jsx';

import styles from './Favorites.less';

export class Favorites extends React.Component {

  render() {
    return (
      <div className={styles.pageContainer}>
        <h3 className={styles.pageTitle}>Favorites</h3>
        <RealtyList
          className={styles.pageContent}
          searchResults={this.props.searchResults}
          totalResults={this.props.totalResults}
        />
      </div>
    );
  }

}
