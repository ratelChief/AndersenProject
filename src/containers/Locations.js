import { connect } from 'react-redux';

import Locations from '../components/locations/Locations.jsx';
import { fetchLocationAction, fetchMyLocationAction, setToIitialState } from '../actions/locationActions';

const mapStateToProps = ({
  locations: {
    title,
    locations,
    searchedValue,
    recentSearches,
    searchResults
  } }) => ({
  title,
  locations,
  searchedValue,
  recentSearches,
  searchResults
});

const mapDispatchToProps = {
  onGoButton: fetchLocationAction,
  onMyLocationButton: fetchMyLocationAction,
  setInitState: setToIitialState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);
