import React, { Component } from 'react';

export default class SearchResults extends Component {

  renderSearchList = () => {
    if (this.props.searchList) {
      return this.props.searchList.map(result => result.title);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div> {this.renderSearchList()} </div>
    );
  }
}
