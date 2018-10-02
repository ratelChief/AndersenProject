import React from 'react';

import styles from './RealtyList.less';

export const RealtyItem = props =>
  <div className={styles.item} >
    <img src={props.img_url} className={styles.itemImg} />
    <span className={styles.itemPrice}>{props.price_formatted}</span>
    <span className={styles.itemTitle}>{props.title.toLowerCase()}</span>
  </div>;
