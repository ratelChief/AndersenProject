import { connect } from 'react-redux';

import PropertyDetails from '../components/propertyDetails/PropertyDetails.jsx';
import * as property from '../actions/propertyActions';

const mapStateToProps = state => ({
  title: state.property.title,
  price: state.property.price,
  image: state.property.image,
  summary: state.property.summary,
  bathrooms: state.property.bathrooms,
  bedrooms: state.property.bedrooms
});

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails);
