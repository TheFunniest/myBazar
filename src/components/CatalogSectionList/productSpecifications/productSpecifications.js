import React from "react";
// import useStyles from  "./styles.js";

import makeStyles from "@material-ui/core/styles/makeStyles";


// COMPONENTS
import CheckBox from "./checkbox";
import PriceSlider from "./slider";
import ExpansionPanel from './expansionPanel'


const Styles = makeStyles({
  productSpecifications: {
    display: 'flex',
    flexDirection: 'column'
  },
});

const ProductSpecifications = () => {
  const classes = Styles();
  return (
    <div className={classes.productSpecifications}>
      <ExpansionPanel 
      title={'Технология'}
      type={CheckBox()}
      />
      <ExpansionPanel 
      title={'Бренд'}
      type={CheckBox()}
      />
      <ExpansionPanel
      title={'Цена'}
      type={PriceSlider()}
      />
      <ExpansionPanel 
      title={'Бренд'}
      type={CheckBox()}
      />
      <ExpansionPanel 
      title={'Бренд'}
      type={CheckBox()}
      />
    </div>
  );
};

export default ProductSpecifications;
