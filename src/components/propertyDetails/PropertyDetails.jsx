import React, { Component } from 'react';
import styles from './PropertyDetails.less';

export default class PropertyDetails extends Component {
  showBathrooms = () => {
    if (this.props.bathrooms) {
      return this.props.bathrooms;
    }
    return 0;
  };

  render() {
    return (
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <h3 className={styles.pageTitle}>Property Details</h3>
          <button className={styles.btnFaves}>+</button>
        </header>
        <div className={styles.pagePrimary}>
          <span className={styles.itemPrice}>{this.props.price}</span>
          <span className={styles.itemTitle}>{this.props.title.toLowerCase()}</span>
          <img src={this.props.image} className={styles.itemImg} />
        </div>
        <div className={styles.pageSummary}>
          <span className={styles.itemInfo}>{`${this.props.bedrooms} bed, ${this.showBathrooms()} bathrooms`}</span>
          <p className={styles.itemSummary}> {this.props.summary}</p>
        </div>
      </div>
    );

  }
}
