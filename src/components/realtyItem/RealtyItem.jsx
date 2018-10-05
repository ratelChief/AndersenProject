import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import styles from '../realtyList/RealtyList.less';

export const RealtyItemComponent = props => {
  console.log(props, 'item');
  const pushData = () => {
    props.getData(props);
  };

  const showData = () => {
    if (props.price_formatted) {
      return props.price_formatted;
    }
    return props.price;
  };

  const showImg = () => {
    if (props.img_url) {
      return props.img_url;
    }
    return props.image;
  };

  return (

    <Link to={`${props.match.url}/${props.title}`} className={styles.item} onClick={pushData}>
      <img src={showImg()} className={styles.itemImg} />
      <span className={styles.itemPrice}>{showData()}</span>
      <span className={styles.itemTitle}>{props.title.toLowerCase()}</span>
    </Link>
  );

};

export const RealtyItem = withRouter(RealtyItemComponent);
