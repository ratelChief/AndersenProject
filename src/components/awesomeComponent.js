import React, { Component } from 'react';
import './style.less';
import { connect } from 'react-redux';

class AwesomeComponent extends Component {

  addLike() {
    this.props.onAddLike(this.likesCount++);
  }

  render() {
    return (
      <div>
        <div className='likes'>{this.props.testStore.likesCount}</div>
        <button className='addLike' onClick={this.addLike.bind(this)}>Add like</button>
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
      dispatch({ type: 'ADD_LIKE' });
    }
  })
)(AwesomeComponent);
