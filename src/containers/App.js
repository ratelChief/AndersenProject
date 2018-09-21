import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import * as toggleStatus from '../actions/StatusBarActions';
import { fetchLocation } from '../actions/locationActions';

class App extends Component {

  render() {
    const { getStatus, onGoButton, getData, locationsArray } = this.props;
    const locationList = locationsArray.map(location =>
    <a href='#' key={location.place_name}>{location.title}</a>);
    return (
      <div>
        <Header />
        <Main data={getStatus} onGoButton={onGoButton} locationList = {locationList}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getStatus: state.statusBarReducer.status,
  locationsArray: state.fetchLocations.locations
});

const mapDispatchToProps = dispatch => ({
  onGoButton: () => {
    dispatch(toggleStatus.toggleStatusOnSuccess());
    dispatch(fetchLocation());
  },
  getData: () => {
    dispatch(fetchLocation());
  }
});

export default connect(
  mapStateToProps, //mapStateToProps - мапит состояние стора в пропс компонента
  mapDispatchToProps //mapDispatchToProps
)(App);
