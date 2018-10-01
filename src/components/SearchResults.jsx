import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import styles from './SearchResults.less';
import * as constants from '../constants/location.constants';

export default class SearchResults extends Component {

  renderSearchList = () => {
    if (this.props.searchResults) {
      return this.props.searchResults.map(result =>
        <div className={styles.item} key={uuidv4()}>
          <img src={result.img_url} className={styles.itemImg} />
          <span className={styles.itemPrice}>{result.price_formatted}</span>
          <span className={styles.itemTitle}>{result.title.toLowerCase()}</span>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={styles.itemsContainer}>
        <p className={styles.matchStatus}>
          {this.props.searchResults.length} of {this.props.totalResults} matches
        </p>
        {this.renderSearchList()}
      </div>
    );
  }
}
