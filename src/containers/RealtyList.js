import { connect } from 'react-redux';

import RealtyList from '../components/realtyList/RealtyList.jsx';
import { fetchRealtyAction } from '../actions/realtyActions';
import { getPropertyData } from '../actions/propertyActions';

const mapStateToProps = ({
  realty: {
    searchResults,
    totalResults
  }
}) => ({
  searchResults,
  totalResults
});

const mapDispatchToProps = {
  getRealtyList: fetchRealtyAction,
  getData: getPropertyData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealtyList);
