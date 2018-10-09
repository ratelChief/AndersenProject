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
  }
}) => ({
  title,
  price,
  image,
  summary,
  bathrooms,
  bedrooms
});

const mapDispatchToProps = {
  onAddToFavesButton: setToFavorites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails);
