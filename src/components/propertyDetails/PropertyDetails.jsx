import React, { Component } from 'react';
import styles from './PropertyDetails.less';

import { FAVORITES } from '../../constants/favorites.constants.js';

export default class PropertyDetails extends Component {

  showBathrooms = () => this.props.bathrooms || 0;
  showBedrooms = () => this.props.bedrooms || 0;

  addToFaves = () => {
    console.log(this.props);

    if (JSON.parse(localStorage.getItem(FAVORITES)).length === 0) {
      this.props.onAddToFavesButton(this.props);

      localStorage.setItem(
        FAVORITES,
        JSON.stringify(
          [...JSON.parse(localStorage.getItem(FAVORITES)),
            this.props
          ]
        )
      );

    }
    if (JSON.parse(localStorage.getItem(FAVORITES)).every(item => item.title !== this.props.title)) {

      this.props.onAddToFavesButton(this.props);

      localStorage.setItem(
        FAVORITES,
        JSON.stringify(
          [...JSON.parse(localStorage.getItem(FAVORITES)),
            this.props
          ]
        )
      );
    }
  };

  showAddToFaves = () => {
    if (JSON.parse(localStorage.getItem(FAVORITES)).every(item => item.title !== this.props.title)) {
      return <button className={styles.btnFaves} onClick={this.addToFaves}>+</button>;
    }
  }

  render() {

    const { price, title, image, summary } = this.props;

    return (
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <h3 className={styles.pageTitle}>Property Details</h3>
          {this.showAddToFaves()}
        </header>
        <div className={styles.pagePrimary}>
          <span className={styles.itemPrice}>{price}</span>
          <span className={styles.itemTitle}>{title.toLowerCase()}</span>
          <img src={image} className={styles.itemImg} />
        </div>
        <div className={styles.pageSummary}>
          <span className={styles.itemInfo}>{`${this.showBedrooms()} bed, ${this.showBathrooms()} bathrooms`}</span>
          <p className={styles.itemSummary}> {summary}</p>
        </div>
      </div>
    );

  }
}
