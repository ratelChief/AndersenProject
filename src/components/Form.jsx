import React from 'react';
import styles from './Form.less';

export class Form extends React.Component {
  state = { placeName: '' };

  onInputChange = evt => {
    this.setState({
      placeName: evt.target.value
    });
  }

  onGoButtonClick = () => {
    this.props.onGoButton(this.state.placeName);
  }

  onMyLocationClick = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      this.props.onMyLocationButton(pos.coords);
    });
  }

  renderResults = () => {
    if (this.props.locationList.length) {
      return [...new Set(this.props.locationList)];
    }
    return [...new Set(this.props.recentSearches)];
  }

  render() {

    return (
      <form className={styles.pageForm}>
        <input type='text' className={styles.searchInput} onChange={this.onInputChange} />
        <button type='button' className={`${styles.btn} ${styles.search}`} onClick={this.onGoButtonClick} >Go</button>
        <button type='button' className={`${styles.btn} ${styles.location}`} onClick={this.onMyLocationClick}>My location</button>
        <span className={styles.statusbar}>{this.props.data}</span>
        <fieldset className={styles.results}>{this.renderResults()}</fieldset>
      </form>
    );

  }
}
