import React from 'react';

import Form from '../../containers/Form.js';

import styles from './Main.less';

export const Main = () =>
  <main className={styles.pageContent}>
    <p className={styles.appDesc}>
      Use form below to search for houses to buy. You can search be place-name, postcode, or click 'My location', to search in your currect location
    </p>
    <Form />
  </main>;
