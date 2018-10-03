import React, { Component } from 'react';

export default class PropertyDetails extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h3>Property Details</h3>
        <button>+</button>
        <span>{this.props.price_formatted}</span>
        <span>{this.props.title}</span>
        <img src={this.props.img_url} />
        <span>{`${this.props.bedroom_number} bed, ${this.props.bathroom_number} bathrooms`}</span>
        <p>{this.props.summary}</p>
      </div>
    );

  }
}
