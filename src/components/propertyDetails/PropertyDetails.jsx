import React, { Component } from 'react';

export default class PropertyDetails extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h3>Property Details</h3>
        <button>+</button>
        <span>{this.props.price}</span>
        <span>{this.props.title}</span>
        <img src={this.props.image} />
        <span>{`${this.props.bedrooms} bed, ${this.props.bathrooms} bathrooms`}</span>
        <p>{this.props.summary}</p>
      </div>
    );

  }
}
