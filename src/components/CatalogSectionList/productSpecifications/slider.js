import React from "react";

import Slider from "@material-ui/core/Slider";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Styles = makeStyles({
  priceSlider: {
    display: "flex",
    flexDirection: "column",
  },
  priceInputs: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  priceMin: {
    border: "1px solid rgb(164,176,190)",
    borderRadius: "12px",
    outline: "none",
    padding: "7px 8px",
    color: "#07108f",
    width: "100%",
  },
  dash: {
    margin: "0 5px",
    fontWeight: "500",
  },
  sliderWrapper: {
    width: '94%',
    margin: '0 auto'
  },
  sliderRoot: {
    color: "rgb(0, 66, 255)",
    padding: '20px 0'
  },
  thumb: {
    backgroundColor: "#ffffff",
    border: "1.5px solid rgb(0, 66, 255)",
    width: "15px",
    height: "15px",
    marginTop: "-6px",
    marginLeft: "-7px",
  },
  track: {
    height: "3px",
    backgroundColor: "rgb(0, 66, 255)",
  },
  rail: {
    height: "3px",
    backgroundColor: "rgb(0, 66, 255)",
  },
});

const PriceSlider = () => {
  const classes = Styles();
  const [value, setValue] = React.useState([0, 10000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <div className={classes.priceSlider}>
      <div className={classes.priceInputs}>
        <input type="text" className={classes.priceMin} />
        <span className={classes.dash}>-</span>
        <input type="text" className={classes.priceMin} />
      </div>
      <div className={classes.sliderWrapper}>
        <Slider
          //   valueLabelDisplay="auto"
          value={value}
          // valueLabelDisplay="auto"
          onChange={handleChange}
          max={10000000}
          classes={{
            root: classes.sliderRoot,
            thumb: classes.thumb,
            track: classes.track,
            rail: classes.rail,
          }}
        />
      </div>
    </div>
  );
};

export default PriceSlider;
