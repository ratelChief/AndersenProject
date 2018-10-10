import { connect } from 'react-redux';

import { Favorites } from '../components/favorites/Favorites.jsx';
import { setToInitialState } from '../actions/favoritesAction.js';
import { getPropertyData } from '../actions/propertyActions.js';

import { FAVORITES } from '../constants/favorites.constants.js';
import { getFromLocalStorage } from '../utils.js';


const mapStateToProps = ({ favorites }) => ({
  searchResults: favorites.data,
  totalResults: favorites.data.length,
  listOfFavorites: getFromLocalStorage(FAVORITES)
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
