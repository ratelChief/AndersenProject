import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header.jsx';
import { Main } from '../components/Main.jsx';
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
    getStatus: state.locations.title,
    locationsArray: state.locations.locations
  });

  const mapDispatchToProps = dispatch => ({
    onGoButton: placeName => {
      dispatch(fetchLocationAction(placeName));
    }
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
