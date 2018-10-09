import { connect } from 'react-redux';

import { Favorites } from '../components/favorites/Favorites.jsx';
import { setToInitialState } from '../actions/favoritesAction.js';
import { getPropertyData } from '../actions/propertyActions.js';


const mapStateToProps = state => ({
  searchResults: state.favorites.favorites,
  totalResults: state.favorites.favorites.length
});

const mapDispatchToProps = {
  getRealtyList: () => {},
  getData: getPropertyData,
  setToInitialState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
