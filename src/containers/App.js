import { connect } from 'react-redux';

import AppComponent from '../components/AppComponent.jsx';
import * as locations from '../actions/locationActions';

const mapStateToProps = state => ({
  getStatus: state.locations.title,
  locationsArray: state.locations.locations,
  searchInputValue: state.locations.searchedValue
});

const mapDispatchToProps = {
  onGoButton: locations.fetchLocationAction,
  onMyLocationButton: locations.fetchMyLocationAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
