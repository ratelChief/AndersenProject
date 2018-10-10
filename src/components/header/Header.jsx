import React from 'react';
import styles from './Header.less';

export const Header = () =>
  <header className={styles.pageHeader}>
    <h1 className={styles.pageLogo}>PropertyCross</h1>
    <button className={styles.btnFaves}>Faves</button>
  </header>;
