import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";

// COMPONENTS

import Product from "./product";
import Ad from "../ads/ads";
import Pagination from '../Pagination/pagination'

// IMAGES

import tv1 from "../../assets/images/tv1.png";
import tv2 from "../../assets/images/tv2.png";
import tv3 from "../../assets/images/tv3.png";
import tv4 from "../../assets/images/tv4.png";
import tv5 from "../../assets/images/tv5.png";
import tv6 from "../../assets/images/tv6.png";
import tv7 from "../../assets/images/tv7.png";
import tv8 from "../../assets/images/tv8.png";
import tv9 from "../../assets/images/tv9.png";
import tv10 from "../../assets/images/tv10.png";
import AdImage from "../../assets/images/adProduct.jpg";

const Styles = makeStyles({
  productLayout: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderBottom: "none",
  },
});

const products = () => {
  const classes = Styles();
  return (
    <>
      <div className={classes.productLayout}>
        <Product photos={[tv1, tv2, tv3, tv4, tv5, tv6]} />
      </div>
      <Ad photo={AdImage} />
      <div className={classes.productLayout}>
        <Product photos={[tv7, tv8, tv9, tv10]} />
      </div>
      <Pagination/>
    </>
  );
};

export default products;
