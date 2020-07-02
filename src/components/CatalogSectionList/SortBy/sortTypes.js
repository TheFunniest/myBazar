import React from "react";


import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import makeStyles from "@material-ui/core/styles/makeStyles";



const Styles = makeStyles({
    sortByType: {
      display: "flex",
      alignItems: "center",
      marginRight: '15px'
    },
    sortybyPrice: {
      margin: "5px",
      cursor: "pointer",
      color: "#000000",
    },
    sortybyPriceActive: {
      color: "#0042ff"
    },
    expandMoreIcon: {
      width: "1rem",
      height: "1rem",
      position: 'relative',
      top: '2px'
    },
    expandMoreIconActive: {
      fill: "#0042ff",
    },
  });



const sortTypes = () => {
    const classes = Styles();
  return (
    <>
      <div className={classes.sortByType}>
        <p className={classes.sortybyPrice}>По цене</p>
        <ExpandMoreIcon
          classes={{
            root: classes.expandMoreIcon,
          }}
        />
      </div>
      <div className={classes.sortByType}>
        <p className={classes.sortybyPrice}>По рейтингу</p>
        <ExpandMoreIcon
          classes={{
            root: classes.expandMoreIcon,
          }}
        />
      </div>
      <div className={classes.sortByType}>
        <p className={`${classes.sortybyPrice} ${classes.sortybyPriceActive}`}>
          По новизне
        </p>
        <ExpandMoreIcon
          classes={{
            root: `${classes.expandMoreIcon} ${classes.expandMoreIconActive}`,
          }}
        />
      </div>
    </>
  );
};

export default sortTypes;
