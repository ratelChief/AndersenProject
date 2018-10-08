import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import styles from '../realtyList/RealtyList.less';

export const RealtyItemComponent = props => {
  const pushData = () => {
    props.getData(props);
  };

  return (
    <Link to={`${props.match.url}/${props.title}`} className={styles.item} onClick={pushData}>
      <img src={props.img_url} className={styles.itemImg} />
      <span className={styles.itemPrice}>{props.price_formatted}</span>
      <span className={styles.itemTitle}>{props.title.toLowerCase()}</span>
    </Link>
  );

};

export const RealtyItem = withRouter(RealtyItemComponent);
