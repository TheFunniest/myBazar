import React from "react";
import styles from "./goodsOfTheDay.module.css";
import Timer from "react-compound-timer";
import ProductInfo from '../ProductInfo/productInfo'
// images

const good = ({ img, details, classes }) => {
  return (
    <div className={styles.good}>
      <div className={styles.imageSide}>
        <h4 className={styles.goodOfTheDay}>Товар дня</h4>
        <div className={styles.imgContainer}>
          <img
            src={img.src}
            alt=""
            style={{
              width: img.width,
            }}
          />
        </div>
        <span className={styles.sale}>{img.sale}% скидка</span>
      </div>
      <div className={styles.goodInfo}>
        <div className={styles.saleTimerConatiner}>
        <Timer initialTime={(60000 * 60)*5} direction="backward">
          {() => (
            <p className={styles.saleTimer}>
              <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
            </p>
          )}
        </Timer>
        </div>
        <ProductInfo name={details.name} comments={details.comments} price={details.price} todaysSale={details.todaysSale} classes={classes}/>

      </div>
    </div>
  );
};

export default good;
