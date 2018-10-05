import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import styles from '../realtyList/RealtyList.less';

export const RealtyItemComponent = props => {
  const pushData = () => {
    props.getData(props);
  };

  const showData = () => props.price_formatted || props.price;
  const showImg = () => props.img_url || props.image;


  return (
    <Link to={`${props.match.url}/${props.title}`}
      className={styles.item}
      onClick={pushData}
    >
      <img src={showImg()} className={styles.itemImg} />
      <span className={styles.itemPrice}>{showData()}</span>
      <span className={styles.itemTitle}>{props.title.toLowerCase()}</span>
    </Link>
  );

};

export const RealtyItem = withRouter(RealtyItemComponent);
