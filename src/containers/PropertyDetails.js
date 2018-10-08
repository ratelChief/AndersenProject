import { connect } from 'react-redux';

import PropertyDetails from '../components/propertyDetails/PropertyDetails.jsx';
import * as faves from '../actions/favoritesAction';
import * as property from '../actions/propertyActions';

const mapStateToProps = state => ({
  title: state.property.title,
  price: state.property.price,
  image: state.property.image,
  summary: state.property.summary,
  bathrooms: state.property.bathrooms,
  bedrooms: state.property.bedrooms,
  isAddedToFaves: state.property.isAddedToFaves
});

const mapDispatchToProps = {
  onAddToFavesButton: faves.setToFavorites,
  addedToFaves: property.addedToFaves
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails);
