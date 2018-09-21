import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { toggleStatus } from '../actions/locationActions';

class App extends Component {

  render() {
    const { getStatus } = this.props;
    const { onGoButton } = this.props;
    return (
      <div>
        <Header />
        <Main data={getStatus} onGoButton={onGoButton} />
        <button type='button' onClick={onGoButton}>click</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getStatus: state.locationReducer.status
});

const mapDispatchToProps = dispatch => ({
  onGoButton: () => {
    dispatch(toggleStatus());
  }
});

export default connect(
  mapStateToProps, //mapStateToProps - мапит состояние стора в пропс компонента
  mapDispatchToProps //mapDispatchToProps
)(App);
