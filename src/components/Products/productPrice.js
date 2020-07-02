import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';

// IMAGES

import addtoCart from "../../assets/images/addtoCard.png";
import compareIcon from "../../assets/images/addToCompare.png";
import favIcon from "../../assets/images/fav.png";
import shippingIcon from "../../assets/images/shipping.png";
import pickUpIcon from "../../assets/images/pickUp.png";

const Styles = makeStyles({
  productPrice: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  productBooking: {
    height: "93%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
    paddingLeft: "15px",
  },
  price: {
    color: "#0042ff",
    marginTop: "-7px",
    fontWeight: 'bold'
  },
  sum: {
    fontWeight: "normal",
  },
  sales: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "10px 0",
  },
  salePercent: {
    padding: "2px 10px 3px",
    color: "#ffffff",
    backgroundColor: "#11da53",
    borderRadius: "20px",
    textTransform: "uppercase",
    fontSize: "16px",
    marginRight: "15px",
  },
  saleSum: {
    color: "#a4b0be",
    fontWeight: "600",
    fontSize: "17px",
    textDecoration: "line-through",
  },
  addTo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  },
  addToCart: {
    border: "none",
    backgroundColor: "#0042ff",
    padding: "10px",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "16px",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    width: "60%",
    cursor: "pointer",
    justifyContent: "space-evenly",
    "& > img": {
      height: "20px",
    },
  },
  addToCompare: {
    border: "1px solid #000000",
    borderRadius: "50%",
    padding: "5px 7px",
    cursor: "pointer",
  },
  addToFav: {
    border: "1px solid #000000",
    borderRadius: "50%",
    padding: "8px 7px 3px 7px",
    cursor: "pointer",
    "& > img": {
      height: "23px",
    },
  },
  shippingType: {
    marginTop: "30px",
  },
  shipping: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "10px",
    "& > img ": {
      marginRight: "10px",
    },
  },
  pickUp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "& > img ": {
      marginRight: "10px",
    },
  },
  productCompany: {
    color: "#a4b0be",
    fontSize: "14px",
    fontWeight: "normal",
    marginTop: "42%",
  },
});

const productPrice = () => {
  const classes = Styles();
  return (
    <div className={classes.productPrice}>
      <div className={classes.productBooking}>
        <Typography variant="h5" className={classes.price}>
          3 456 447 <span className={classes.sum}>сум</span>
        </Typography>
        <div className={classes.sales}>
          <h3 className={classes.salePercent}>-29 % скидка</h3>
          <p className={classes.saleSum}>1 055 990 сум</p>
        </div>
        <div className={classes.addTo}>
          <button className={classes.addToCart}>
            <img className={classes.cartIcon} src={addtoCart} alt="cart" />В
            корзину
          </button>
          <div className={classes.addToCompare}>
            <img src={compareIcon} alt="compareIcon" />
          </div>
          <div className={classes.addToFav}>
            <img src={favIcon} alt="favIcon" />
          </div>
        </div>
        <div className={classes.shippingType}>
          <div className={classes.shipping}>
            <img src={shippingIcon} alt="shippingIcon" /> Доставка в течении
            сутки
          </div>
          <div className={classes.pickUp}>
            <img src={pickUpIcon} alt="pickUpIcon" />
            Самовывоз, с 08 апреля
          </div>
        </div>
        <p className={classes.productCompany}>ООО “Hotpoint Uzbekistan”</p>
      </div>
    </div>
  );
};

export default productPrice;
