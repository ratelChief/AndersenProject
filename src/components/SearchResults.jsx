import React, { Component } from 'react';

export default class SearchResults extends Component {

  renderResults = () => {
    if (this.props.searchList) {
      return this.props.searchList.map(result => result.title);
    }
    return [];
  }

  render() {
    console.log(this.props);
    return (
      <div> {this.renderResults()} </div>
    );
  }
}
