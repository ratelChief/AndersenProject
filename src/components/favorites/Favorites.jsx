import React from 'react';
import RealtyList from '../realtyList/RealtyList.jsx';

export class Favorites extends React.Component {

  render() {
    console.log(this.props, 'favorites');
    return (
      <div className='pageContainer'>
        <h3 className='pageTitle'>Favorites</h3>
        <RealtyList
          searchResults={this.props.searchResults} totalResults={this.props.totalResults}
        />
      </div>
    );
  }

}
