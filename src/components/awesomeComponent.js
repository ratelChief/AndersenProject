import React, { Component } from 'react';
import './style.less';

class AwesomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { likesCount: 0 };
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    const newLikesCount = this.state.likesCount + 1;
    this.setState({ likesCount: newLikesCount });
  }

  render() {
    return (
      <div className='likes'>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;
