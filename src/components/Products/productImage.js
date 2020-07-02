import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";

import tv1 from '../../assets/images/tv1.png'


const Styles = makeStyles({
  productImageSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  productImage: {
    objectFit: 'contain',
    maxWidth: '90%',
    zIndex: '20',
    transition:'transform .2s',
    '&:hover': {
      cursor: 'grab',
      transform: 'scale(1.5)'
    }
  }
})

const productImage = ({ photo }) => {
    const classes = Styles()
  return (
    <div className={classes.productImageSection}>
      <img src={photo} alt="3122" className={classes.productImage} />
    </div>
  );
};


export default productImage;