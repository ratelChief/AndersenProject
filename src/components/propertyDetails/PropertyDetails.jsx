import React from 'react';

export const PropertyDetails = props =>
  <div>
    <h3>Property Details</h3>
    <button>+</button>
    <span>{props.price_formatted}</span>
    <span>{props.title}</span>
    <img src={props.img_url} />
    <span>{`${props.bedroom_number} bed, ${props.bathroom_number} bathrooms`}</span>
    <p>{props.summary}</p>
  </div>;
