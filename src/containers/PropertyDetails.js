import { connect } from 'react-redux';

import PropertyDetails from '../components/propertyDetails/PropertyDetails.jsx';
import * as faves from '../actions/favoritesAction';

const mapStateToProps = ({ // насколько же меньше кода стало
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
  addToFaves: faves.setToFavorites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails);
