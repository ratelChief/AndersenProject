import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';

class AwesomeComponent extends Component {

  render() {
    return (
      <div>
      <div className='likes'>{this.props.testStore.likesCount}</div>
      <button className='addLike' onClick={this.props.onAddLike}>Add like</button>
      <button className='removeLike' onClick={this.props.onRemoveLike}>Remove like</button>
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
      dispatch({ type: 'ADD_LIKE', payload: 1 });
    },
    onRemoveLike: () => {
      dispatch({ type: 'REMOVE_LIKE', payload: 1 });
    }
  }) //mapDispatchToProps
)(AwesomeComponent);
