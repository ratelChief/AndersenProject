import React from 'react';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
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

  getItem = (value1, value2 = '') =>
    <Link to={`/realty/${value1}`}
      className={styles.locationItem}
      key={uuidv4()}
    >
      {value1 + value2}
    </Link>

  render() {
    const { locations, recentSearches, title } = this.props;

    const locationList =
    locations.map(
      location => this.getItem(location.title)
    );

    const recentSearchesList =
    recentSearches.map(
      search => this.getItem(`${search.searchBy}`, `(${search.length})`)
    );

    return (
      <form className={styles.pageForm}>

        <input type='text'
          className={styles.searchInput}
          onChange={this.onInputChange}
        />

        <button type='button'
          className={`${styles.btn} ${styles.search}`}
          onClick={this.onGoButtonClick}
        >Go
        </button>

        <button type='button'
          className={`${styles.btn} ${styles.location}`}
          onClick={this.onMyLocationClick}
        >
          My location
        </button>

        <span className={styles.statusbar}>{title}</span>
        <fieldset className={styles.results}>
          {locationList.length ? locationList : recentSearchesList}
        </fieldset>
      </form>
    );

  }
}
