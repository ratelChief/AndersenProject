import React, { Component } from 'react';

export default class SearchResults extends Component {

  render() {
    console.log(this.props);

    return (
      <div> {this.props.searchResults} </div>
    );
  }
}
