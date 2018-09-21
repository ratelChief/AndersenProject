import React from 'react';

export const Form = ({ data, onGoButton, locationList }) =>
<form className='page-form'>
  <input type='text' className='search-input' />
  <button type='button' className='btn btn--search' onClick={onGoButton}>Go</button>
  <button className='btn btn--location'>My location</button>
  <span className='status-bar'>{data}</span>
  <fieldset className='results'> {locationList} </fieldset>
</form>;
