import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";

// COMPONENTS
import ProductImage from "./productImage";
import ProductInfo from "./productInfo";
import ProductPrice from "./productPrice";

const Styles = makeStyles({
  product: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    minHeight: "330px",
  }
});

const product = ({ photos }) => {
  const classes = Styles();
  return (
    <>
      {photos.map((photo, index) => {
        return (
          <div key={index} className={classes.product}>
            <ProductImage photo={photo} />
            <ProductInfo />
            <ProductPrice />
          </div>
        );
      })}
    </>
  );
};

export default product;
