import { connect } from 'react-redux';

import Locations from '../components/locations/Locations.jsx';
import { setToInitialState } from '../actions/locationActions';

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
  setToInitialState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);
