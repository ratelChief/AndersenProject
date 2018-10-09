import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import { RealtyItem } from '../realtyItem/RealtyItem.jsx';

import styles from './RealtyList.less';

export default class RealtyList extends Component {
  componentDidMount() {
    const { getRealtyList, match } = this.props;
    if (getRealtyList) {
      getRealtyList(match.params.item);
    }
  }

  render() {
    const { searchResults, totalResults, getData } = this.props;

    return (
      <div className={styles.itemsContainer}>
        <p className={styles.matchStatus}>
          {searchResults.length} of {totalResults} matches
        </p>
        {searchResults.map(result =>
          <RealtyItem
            key={uuidv4()}
            {...result}
            getData={getData}
          />
        )}
      </div>
    );

  }
}
