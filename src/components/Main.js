import React from 'react';
import { Form } from './Form';

export const Main = ({ data }) =>
<main className='page-main'>
  <p className='app-desc'>Use form below to search for houses to buy.
     You can search be place-name, postcode, or click 'My location, to search
      in your currect location'</p>
      <Form data={data} />
</main>;
