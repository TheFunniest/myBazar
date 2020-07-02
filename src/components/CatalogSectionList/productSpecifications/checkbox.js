import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import makeStyles from "@material-ui/core/styles/makeStyles";



const Styles = makeStyles({
    body1: {
      fontWeight: "bold",
      fontFamily: "Cera Pro",
      color: "black",
    },

})
const checkBoxSpecification = () => {
    const classes = Styles()
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="LED"
        classes={{
          root: classes.body1,
        }}
      />
      <FormControlLabel control={<Checkbox color="primary" />} label="OLED" />
      <FormControlLabel control={<Checkbox color="primary" />} label="QLED" />
      <FormControlLabel control={<Checkbox color="primary" />} label="4 UHD" />
    </FormGroup>
  );
};

export default checkBoxSpecification;
