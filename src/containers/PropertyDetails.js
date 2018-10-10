import { connect } from 'react-redux';

import PropertyDetails from '../components/propertyDetails/PropertyDetails.jsx';
import { setToFavorites } from '../actions/favoritesAction';

const mapStateToProps = ({
  property: {
    title,
    price,
    image,
    summary,
    bathrooms,
    bedrooms
  },
  favorites: {
    data: favorites
  }
}) => ({
  title,
  price,
  image,
  summary,
  bathrooms,
  bedrooms,
  listOfFavorites: favorites
});

const mapDispatchToProps = {
  addToFaves: setToFavorites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails);
