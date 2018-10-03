import { connect } from 'react-redux';

import PropertyDetails from '../components/propertyDetails/PropertyDetails.jsx';

const mapStateToProps = state => ({
  title: state.title,
  price: state.price,
  image: state.image,
  desc: state.desc,
  bathrooms: state.bathrooms,
  bedrooms: state.bedrooms
});

export default connect(
  mapStateToProps
)(PropertyDetails);
