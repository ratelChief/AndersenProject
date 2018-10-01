import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import RealtyItem from './RealtyList.jsx';

import styles from './RealtyList.less';

export default class RealtyList extends Component {

  renderRealtyList = () => {
    if (this.props.searchResults) {
      return this.props.searchResults.map(result =>
        <RealtyItem key={uuidv4()} {...result} />
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.itemsContainer}>
        <p className={styles.matchStatus}>
          {this.props.searchResults} of {this.props.totalResults} matches
        </p>
        {this.renderRealtyList()}
      </div>
    );
  }
}
