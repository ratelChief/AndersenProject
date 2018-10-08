import { connect } from 'react-redux';

import { Favorites } from '../components/favorites/Favorites.jsx';
import * as faves from '../actions/favoritesAction.js';
import * as property from '../actions/propertyActions.js';


const mapStateToProps = state => ({
  searchResults: state.favorites.favorites,
  totalResults: state.favorites.favorites.length
});

const mapDispatchToProps = {
  getRealtyList: () => {},
  getData: property.getPropertyData,
  setInitState: faves.setToIitialState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
