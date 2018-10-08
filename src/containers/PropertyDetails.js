import { connect } from 'react-redux';

import PropertyDetails from '../components/propertyDetails/PropertyDetails.jsx';
import * as faves from '../actions/favoritesAction';
import * as realty from '../actions/realtyActions';

const mapStateToProps = state => ({
  title: state.property.title,
  price: state.property.price,
  image: state.property.image,
  summary: state.property.summary,
  bathrooms: state.property.bathrooms,
  bedrooms: state.property.bedrooms
});

const mapDispatchToProps = {
  onAddToFavesButton: faves.setToFavorites,
  addedToFaves: realty.addingToFaves
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails);
