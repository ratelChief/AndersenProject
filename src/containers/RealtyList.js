import { connect } from 'react-redux';

import RealtyList from '../components/realtyList/RealtyList.jsx';
import * as realty from '../actions/realtyActions';
import * as property from '../actions/propertyActions';

const mapStateToProps = state => ({
  searchResults: state.realty.searchResults,
  totalResults: state.realty.totalResults,
  isAddedToFaves: state.realty.isAddedToFaves
});

const mapDispatchToProps = {
  getRealtyList: realty.fetchRealtyAction,
  getData: property.getPropertyData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealtyList);
