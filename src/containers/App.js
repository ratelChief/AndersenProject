import { connect } from 'react-redux';

import AppComponent from '../components/AppComponent.jsx';
import { fetchLocationAction } from '../actions/locationActions';

  const mapStateToProps = state => ({
    getStatus: state.locations.title,
    locationsArray: state.locations.locations
  });

  // const mapDispatchToProps = dispatch => ({
  //   onGoButton: placeName => {
  //     dispatch(fetchLocationAction(placeName));
  //   }
  // });

  const mapDispatchToProps = {
    onGoButton: fetchLocationAction
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppComponent);
