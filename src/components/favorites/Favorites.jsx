import React from 'react';
import { RealtyList } from '../realtyList/RealtyList.jsx';

export class Favorites extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className='pageContainer'>
        <h3 className='pageTitle'>Favorites</h3>
        {/* <RealtyList props={} /> */}
      </div>
    );
  }

}
