import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

export default class SearchResults extends Component {

  renderSearchList = () => {
    if (this.props.searchList) {
      return this.props.searchList.map(result =>
        <div key={uuidv4()}>
          <img src={result.img_url} />
          <span>{result.price_formatted}</span>
          <span>{result.title}</span>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderSearchList()}
      </div>
    );
  }
}
