import React from "react";

// COMPONENTS
import ProductDetails from "./productDetails";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

import CommentsImage from "../../assets/images/comments.png";

const Styles = makeStyles({
  productInfo: {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  productName: {
    marginTop: "5px",
    lineHeight: '25px',
    
  },
  productRates: {
    display: "flex",
    marginTop: "5px",
  },
  comments: {
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
    "&>img": {
      marginRight: "10px",
      height: "75%",
    },
  },
  commentsCount: {
    color: "#a4b0be",
  },
});

const productInfo = () => {
  const classes = Styles();
  return (
    <div className={classes.productInfo}>
      <Typography variant="h6" className={classes.productName}>
        Телевизор Samsung UE55RU7200U
      </Typography>
      <div className={classes.productRates}>
        <Rating name="read-only" value={4} readOnly />
        <div className={classes.comments}>
          <img src={CommentsImage} alt="123" />
          <span className={classes.commentsCount}>123</span>
        </div>
      </div>
      <ProductDetails />
    </div>
  );
};

export default productInfo;
