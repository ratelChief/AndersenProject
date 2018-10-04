import { connect } from 'react-redux';

import { Favorites } from '../components/favorites/Favorites.jsx';

const mapStateToProps = state => ({
  dataFromLocalStore: 'string',
  addedFavorites: state.favorites.favorites
});

export default connect(
  mapStateToProps
)(Favorites);
