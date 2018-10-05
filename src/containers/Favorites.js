import { connect } from 'react-redux';

import RealtyList from '../components/realtyList/RealtyList.jsx';
import { Favorites } from '../components/favorites/Favorites.jsx';
import * as faves from '../actions/favoritesAction.js';

const mapStateToProps = state => ({
  searchResults: state.favorites.favorites,
  totalResults: state.favorites.favorites.length
});

const mapDispatchToProps = {
  getRealtyList: () => {},
  getData: () => {},
  setInitState: faves.setToIitialState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
