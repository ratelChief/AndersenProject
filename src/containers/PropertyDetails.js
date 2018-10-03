import { connect } from 'react-redux';

import PropertyDetails from '../components/propertyDetails/PropertyDetails.jsx';

const mapStateToProps = state => ({
  title: state.title
});

export default connect(
  mapStateToProps
)(PropertyDetails);
