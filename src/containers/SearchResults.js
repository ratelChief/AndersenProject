import { connect } from 'react-redux';

import SearchResults from '../components/SearchResults.jsx';

const mapStateToProps = state => ({
  searchResults: state.locations.searchResults,
  totalResults: state.locations.totalResults
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
