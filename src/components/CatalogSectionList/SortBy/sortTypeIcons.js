import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import ListIcon from "../../../assets/images/sortByList.png";
import MosaicIcon from "../../../assets/images/sortByMosaic.png";

const Styles = makeStyles({
  sortIcons: {
    display: "flex",
    width: "85px",
    border: "2px solid rgb(166,178,194)",
    borderRadius: "17px",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sortByList: {
    border: 'none',
    backgroundColor: 'unset',
    padding: "5px 10px",
    outline: 'none',
    cursor: 'pointer',
    // height:
  },
  sortByMosaic: {
      borderRadius: '15px',
      backgroundColor: 'rgb(0,66,255)',
      padding: '5px 0 5px 20px',
      width: 35,
      height: 35,
      marginRight: 1,
      position: 'relative',
      '&>img': {
          position: 'absolute',
          left: '17%',
          bottom: '14%'
      }
  }
  
});

const sortTypeIcons = () => {
  const classes = Styles();
  return (
    <div className={classes.sortIcons}>
      <button className={classes.sortByList}>
      <img src={ListIcon} alt="123" />
      </button>
      <div className={classes.sortByMosaic}>
        <img src={MosaicIcon} alt="123"/>
      </div>
    </div>
  );
};

export default sortTypeIcons;
