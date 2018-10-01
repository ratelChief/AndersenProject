import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import styles from './SearchResults.less';

export default class SearchResults extends Component {

  renderSearchList = () => {
    if (this.props.searchResults) {
      return this.props.searchResults.map(result =>
        <div className={styles.container} key={uuidv4()}>
          <div className={styles.item}>
            <img src={result.img_url} className={styles.itemImg} />
            <span className={styles.itemPrice}>{result.price_formatted}</span>
            <span className={styles.itemTitle}>{result.title}</span>
          </div>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderSearchList()}
      </div>
    );
  }
}
