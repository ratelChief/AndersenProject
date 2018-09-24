import React from 'react';
import { Form } from './Form.jsx';
import styles from './Main.less';

export const Main = ({ data, onGoButton, locationList }) =>
<main className={styles.page}>
  <p className='app-desc'>Use form below to search for houses to buy.
     You can search be place-name, postcode, or click 'My location, to search
      in your currect location'</p>
      <Form data={data} onGoButton={onGoButton} locationList={locationList} />
</main>;
