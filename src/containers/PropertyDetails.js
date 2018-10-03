import { connect } from 'react-redux';

import { PropertyDetails } from '../components/propertyDetails/PropertyDetails.jsx';

const mapStateToProps = state => ({
  searchResults: state.realty.searchResults
});

export default connect(
  mapStateToProps
)(PropertyDetails);
