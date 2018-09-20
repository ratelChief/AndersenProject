import React from 'react';

export const Form = ({ data }) =>
<form className='page-form'>
  <input type='text' className='search-input' />
  <button className='btn btn--search'>Go</button>
  <button className='btn btn--location'>My location</button>
  <span className='status-bar'>{data}</span>
  <fieldset className='results' />
</form>;
