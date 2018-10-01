import { connect } from 'react-redux';

import RealtyList from '../components/RealtyList.jsx';

const mapStateToProps = state => ({
  searchResults: state.realty.searchResults,
  totalResults: state.realty.totalResults,
  recentSearches: state.locations.recentSearches
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealtyList);
