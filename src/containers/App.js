import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { fetchLocationAction } from '../actions/locationActions';

class App extends Component {

  render() {
    const { getStatus, onGoButton, locationsArray } = this.props;
    const locationList = locationsArray.map(location =>
      <a href='#' key={location.place_name}>{location.title}</a>);
      return (
        <div>
          <Header />
          <Main
            data={ getStatus }
            onGoButton={ onGoButton }
            locationList={ locationList }
          />
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    getStatus: state.locationsReducer.title,
    locationsArray: state.locationsReducer.locations
  });

  const mapDispatchToProps = dispatch => ({
    onGoButton: () => {
      dispatch(fetchLocationAction());
    }
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
