import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';

class AwesomeComponent extends Component {

  constructor() {
    super();
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  addLike() {
    this.props.onAddLike(this.props.testStore.likesCount);
  }

  removeLike() {
    this.props.onRemoveLike(this.props.testStore.likesCount);
  }


  render() {
    return (
      <div>
      <div className='likes'>{this.props.testStore.likesCount}</div>
      <button className='addLike' onClick={this.addLike}>Add like</button>
      <button className='removeLike' onClick={this.removeLike}>Remove like</button>
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
