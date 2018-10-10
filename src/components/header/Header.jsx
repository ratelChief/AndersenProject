import React from 'react';
import styles from './Header.less';
import { Link } from 'react-router-dom';

export const Header = () =>
  <header className={styles.pageHeader}>
    <h1 className={styles.pageLogo}>PropertyCross</h1>
    <Link to='/favorites' className={styles.btnFaves}>
      Faves
    </Link>
  </header>;
