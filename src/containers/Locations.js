import { connect } from 'react-redux';

import Locations from '../components/locations/Locations.jsx';
import * as locations from '../actions/locationActions';

const mapStateToProps = state => ({
  getStatus: state.locations.title,
  locationsArray: state.locations.locations,
  searchInputValue: state.locations.searchedValue,
  recentSearches: state.locations.recentSearches,
  searchResults: state.locations.searchResults
});

const mapDispatchToProps = {
  onGoButton: locations.fetchLocationAction,
  onMyLocationButton: locations.fetchMyLocationAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);
