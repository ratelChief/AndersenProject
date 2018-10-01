import { connect } from 'react-redux';

import RealtyList from '../components/RealtyList.jsx';

const mapStateToProps = state => ({
  searchResults: state.locations.searchResults,
  totalResults: state.locations.totalResults,
  recentSearches: state.locations.recentSearches
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealtyList);
