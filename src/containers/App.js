import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

import { addLike, removeLike } from '../actions/likeActions';

class App extends Component {

  render() {
    const { getStatus } = this.props;
    return (
      <div>
        <Header />
        <Main data={getStatus} />
      </div>
    );
  }
}

const mapStateToProps = state =>
({
  getStatus: state.locationReducer.status
});
//const mapDispatchToProps =
export default connect(
  mapStateToProps, //mapStateToProps - мапит состояние стора в пропс компонента
  dispatch => ({
    onAddLike: () => {
      dispatch(addLike(1));
    },
    onRemoveLike: () => {
      dispatch(removeLike(1));
    }
  }) //mapDispatchToProps
)(App);
