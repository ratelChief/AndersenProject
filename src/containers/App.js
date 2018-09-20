import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';
import { Remove } from '../components/Remove';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Form } from '../components/Form';
import { addLike, removeLike } from '../actions/likeActions';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
      <div className='likes'>{this.props.testStore.likesCount}</div>
      <button className='addLike' onClick={this.props.onAddLike}>Add like</button>
      <Remove onRemoveLike={() => this.props.onRemoveLike()} />
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }), //mapStateToProps - мапит состояние стора в пропс компонента
  dispatch => ({
    onAddLike: () => {
      dispatch(addLike(1));
    },
    onRemoveLike: () => {
      dispatch(removeLike(1));
    }
  }) //mapDispatchToProps
)(App);
