import { connect } from 'react-redux';

import RealtyList from '../components/RealtyList.jsx';
import * as realty from '../actions/realtyActions';

const mapStateToProps = state => ({
  searchResults: state.realty.searchResults,
  totalResults: state.realty.totalResults,
  recentSearches: state.locations.recentSearches
});

const mapDispatchToProps = {
  getRealtyList: realty.fetchRealtyAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealtyList);
