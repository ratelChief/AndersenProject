import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { toggleStatus } from '../actions/StatusBarActions';
import { getLocations } from '../actions/locationActions'

class App extends Component {

  render() {
    const { getStatus, onGoButton, getData, locations } = this.props;
    return (
      <div>
        <Header />
        <Main data={getStatus} onGoButton={onGoButton} />
        <button onClick={getData} type='button'>click{locations}</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getStatus: state.statusBarReducer.status,
  locations: state.locationReducer.data
});

const mapDispatchToProps = dispatch => ({
  onGoButton: () => {
    dispatch(toggleStatus());
  },
  getData: () => {
    dispatch(getLocations());
  }
});

export default connect(
  mapStateToProps, //mapStateToProps - мапит состояние стора в пропс компонента
  mapDispatchToProps //mapDispatchToProps
)(App);
