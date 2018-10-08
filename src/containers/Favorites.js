import { connect } from 'react-redux';

import { Favorites } from '../components/favorites/Favorites.jsx';
import { getPropertyData } from '../actions/propertyActions.js';
import { setToIitialState } from '../actions/favoritesAction';

import { FAVORITES } from '../constants/favorites.constants.js';

const mapStateToProps = ({ favorites }) => ({ // и тут
  searchResults: favorites.data,
  totalResults: favorites.data.length,
  listOfFavorites: JSON.parse(localStorage.getItem(FAVORITES))
});

//где ты вообще такое нашел??

const mapDispatchToProps = {
  getRealtyList: () => {},
  getData: getPropertyData,
  setInitState: setToIitialState
};

// const mapDispatchToProps = dispatch => ({
//   getData: () => dispatch(getPropertyData())
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
