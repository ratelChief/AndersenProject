import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { toggleStatus } from '../actions/StatusBarActions';
import { fetchLocation } from '../actions/locationActions';

class App extends Component {

  render() {
    const { getStatus, onGoButton, getData, locationsArray } = this.props;

      // const locationList = locationsArray.map(location =>
      //   <li>{location.thanks}</li>);
    return (
      <div>
        <Header />
        <Main data={getStatus} onGoButton={onGoButton} />
        <button onClick={getData} type='button'>click</button>
        {/* <ul>{locationList}</ul> */}
        <div>{locationsArray.application_response_code}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getStatus: state.statusBarReducer.status,
  locationsArray: state.fetchLocations
});

const mapDispatchToProps = dispatch => ({
  onGoButton: () => {
    dispatch(toggleStatus());
  },
  getData: () => {
    dispatch(fetchLocation());
  }
});

export default connect(
  mapStateToProps, //mapStateToProps - мапит состояние стора в пропс компонента
  mapDispatchToProps //mapDispatchToProps
)(App);
