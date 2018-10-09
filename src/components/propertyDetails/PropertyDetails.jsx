import React, { Component } from 'react';
import styles from './PropertyDetails.less';

export default class PropertyDetails extends Component {

  addToFaves = () => {
    this.props.addToFaves(this.props);
  };

  render() {
    const { price, title, bathrooms, bedrooms, image, summary, listOfFavorites } = this.props;

    const notExistInFaves = !listOfFavorites.find(
      ({ title }) => title === this.props.title
    );

    return (
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <h3 className={styles.pageTitle}>Property Details</h3>
          { notExistInFaves ? (
            <button className={styles.btnFaves} onClick={this.addToFaves}>+</button>
          ) : null}
        </header>
        <div className={styles.pagePrimary}>
          <span className={styles.itemPrice}>{price}</span>
          <span className={styles.itemTitle}>{title.toLowerCase()}</span>
          <img src={image} className={styles.itemImg} />
        </div>
        <div className={styles.pageSummary}>
          <span className={styles.itemInfo}>
            {`${bedrooms ? bedrooms : 0} bed, ${bathrooms ? bathrooms : 0} bathrooms`}
          </span>
          <p className={styles.itemSummary}>{summary}</p>
        </div>
      </div>
    );

  }
}
