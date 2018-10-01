import React from 'react';

import styles from './RealtyList.less';

export const ReactItem = result =>
  <div className={styles.item} >
    <img src={result.img_url} className={styles.itemImg} />
    <span className={styles.itemPrice}>{result.price_formatted}</span>
    <span className={styles.itemTitle}>{result.title.toLowerCase()}</span>
  </div>;
