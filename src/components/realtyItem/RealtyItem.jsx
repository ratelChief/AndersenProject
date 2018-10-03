import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../realtyList/RealtyList.less';

export const RealtyItem = props =>
  <Link to={`/${props.title}`} className={styles.item} >
    <img src={props.img_url} className={styles.itemImg} />
    <span className={styles.itemPrice}>{props.price_formatted}</span>
    <span className={styles.itemTitle}>{props.title.toLowerCase()}</span>
  </Link>;
