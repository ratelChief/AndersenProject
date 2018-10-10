import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import styles from '../realtyList/RealtyList.less';

export const RealtyItemComponent = props => {
  const { getData, price_formatted: priceFormatted, price, img_url: imgUrl, image, title } = props;

  const pushData = () => {
    getData(props);
  };

  return (
    <Link to={`${props.match.url}/${props.title}`}
      className={styles.item}
      onClick={pushData}
    >
      <img src={imgUrl ? imgUrl : image} className={styles.itemImg} />
      <span className={styles.itemPrice}>{priceFormatted ? priceFormatted : price }</span>
      <span className={styles.itemTitle}>{title.toLowerCase()}</span>
    </Link>
  );

};

export const RealtyItem = withRouter(RealtyItemComponent);
