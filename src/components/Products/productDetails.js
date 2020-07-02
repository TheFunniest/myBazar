import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const Styles = makeStyles({
  productInfoText: {
    display: "flex",
    flexDirection: "column",
  },
  productScreen: {
    display: "flex",
    flexDirection: "column",
    marginBottom: '11%'
  },
  detailTitle: {
    color: "#a4b0be",
    fontWeight: "bold",
    fontSize: "0.8rem",
    margin: "5px 0",
  },
  detailTextLine: {
    display: "flex",
    alignItems: 'center'
  },
  detailType: {
    color: "#a4b0be",
    fontWeight: "normal",
    fontSize: "0.75rem",
    marginRight: '3px'
  },
  detailTypeInfo: {
    paddingLeft: "0px",
    color: "#000000",
    fontSize: "0.75rem",
  },
  detailColor: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#000000',
    marginTop: '1px'
  }
});

const productDetails = () => {
  const classes = Styles();
  return (
    <div className={classes.productInfoText}>
      <div className={classes.productScreen}>
        <p className={classes.detailTitle}>Экран</p>
        <div className={classes.detailText}>
          <div className={classes.detailTextLine}>
            <p className={classes.detailType}>Диагональ: </p>
            <p className={classes.detailTypeInfo}> 50" (127 см)</p>
          </div>
          <div className={classes.detailTextLine}>
            <p className={classes.detailType}>Технология:</p>
            <p className={classes.detailTypeInfo}>LED</p>
          </div>
          <div className={classes.detailTextLine}>
            <p className={classes.detailType}>Разрешение экрана:</p>
            <p className={classes.detailTypeInfo}>
              3840x2160 Пикс (4K Ultra HD)
            </p>
          </div>
          <div className={classes.detailTextLine}>
            <p className={classes.detailType}>Поддержка HDR:</p>
            <p className={classes.detailTypeInfo}>Есть</p>
          </div>
        </div>
        <p className={classes.detailTitle}>Функции</p>
        <div className={classes.detailText}>
          <p className={classes.detailTypeInfo}>
            Smart TV, Воспроизведение видео через USB
          </p>
        </div>
        <p className={classes.detailTitle}>Интерфейсы</p>
        <div className={classes.detailTextLine}>
          <p className={classes.detailType}>HDMI:</p>
          <p className={classes.detailTypeInfo}>3</p>
        </div>
        <div className={classes.detailTextLine}>
          <p className={classes.detailType}>Кол-во разъёмов:</p>
          <p className={classes.detailTypeInfo}>3</p>
        </div>
        <div className={classes.detailTextLine}>
          <p className={classes.detailType}>Wi-Fi:</p>
          <p className={classes.detailTypeInfo}>Есть</p>
        </div>
        <div className={classes.detailTextLine}>
          <p className={classes.detailType}>Ethernet:</p>
          <p className={classes.detailTypeInfo}>Есть</p>
        </div>
        <div className={classes.detailTextLine}>
          <p className={classes.detailType}>Цвет:</p>
          <div className={classes.detailColor}></div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
