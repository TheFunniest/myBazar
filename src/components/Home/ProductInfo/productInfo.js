import React from "react";
import styles from "./productInfo.module.css";
import Rating from "@material-ui/lab/Rating";
import Comments from "../../../assets/images/comments.png";

// ICONS
import Fav from "../../../assets/images/fav.png";
import Compare from "../../../assets/images/addToCompare.png";
import Cart from "../../../assets/images/addtoCard.png";

const productInfo = ({ name,comments, price,todaysSale , sale, category, producer, classes }) => {
  return (
    <div className={classes.productInfo ? styles[classes.productInfo] : styles.productInfo}>
      <p className={styles.productName}>{name}</p>
  { category && <p className={styles.category}>{category}</p>}
      <div className={styles[classes.Rate]}>
        <div className={classes.stars ? styles[classes.stars] : ''}>
          <Rating name="read-only" value={4} size="small" />
        </div>
        <div className={styles.comments}>
          <img src={Comments} alt="comments-icon" />
          <span className={styles.commentsCount}>{comments}</span>
        </div>
      </div>
      <div className={styles.prices} style={{
        display: 'flex',
        flexDirection: sale ? 'row' : 'column',
        justifyContent: sale ? 'space-between' : 'flexStart',
        alignItems: sale ? 'center' : '',
        width: sale ? '95%' : 'auto',
        marginTop: '5px'
      }}>
        <p className={styles.priceNow}>
          <strong>{price} </strong>сум
        </p>
        { todaysSale ? <span className={styles.priceOld}>
          <strong>{todaysSale}</strong> сум
        </span> : null}
        {sale ? <span className={styles.priceOld}>
          <strong>{sale}</strong> сум
        </span> : null}
      </div>
      <div className={classes.icons ? styles[classes.icons] : styles.icons}>
        <button className={styles["compareIcon"]}>
          <img src={Compare} alt="compare" />
        </button>
        <button className={styles.cart}>
          <img src={Cart} alt="cart" />
        </button>
        <button className={styles.compareIcon}>
          <img src={Fav} alt="favorites" />
        </button>
      </div>
  {producer && <p className={styles.producer}>{producer}</p>}
    </div>
  );
};

export default productInfo;
