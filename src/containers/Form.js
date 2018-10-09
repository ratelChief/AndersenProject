import { connect } from 'react-redux';

import { Form } from '../components/form/Form.jsx';

import { fetchLocationAction, fetchMyLocationAction } from '../actions/locationActions.js';

const mapStateToProps = ({
  locations: {
    title,
    locations,
    searchedValue,
    recentSearches
  }
}) => ({
  title,
  locations,
  searchedValue,
  recentSearches
});

const mapDispatchToProps = {
  onGoButton: fetchLocationAction,
  onMyLocationButton: fetchMyLocationAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
