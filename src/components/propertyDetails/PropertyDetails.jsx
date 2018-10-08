import React, { Component } from 'react';
import styles from './PropertyDetails.less';


export default class PropertyDetails extends Component {

  showBathrooms = () => this.props.bathrooms || 0;
  showBedrooms = () => this.props.bedrooms || 0;

  addToFaves = () => {
    this.props.addToFaves(this.props);
  };

  render() {
    const notExistInFaves = !this.props.listOfFavorites.find(
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
          <span className={styles.itemPrice}>{this.props.price}</span>
          <span className={styles.itemTitle}>{this.props.title.toLowerCase()}</span>
          <img src={this.props.image} className={styles.itemImg} />
        </div>
        <div className={styles.pageSummary}>
          <span className={styles.itemInfo}>{`${this.showBedrooms()} bed, ${this.showBathrooms()} bathrooms`}</span>
          <p className={styles.itemSummary}> {this.props.summary}</p>
        </div>
      </div>
    );

  }
}
