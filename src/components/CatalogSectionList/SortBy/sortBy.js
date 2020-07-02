import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";

// COMPONENTS

import SortTypes from './sortTypes'

import SortTypeIcons from './sortTypeIcons'


const Styles = makeStyles({
  sortBy: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: '14px',
    marginBottom: '30px'
  },
});

const sortBy = () => {
  const classes = Styles();
  return (
    <div className={classes.sortBy}>
      <SortTypes/>
      <SortTypeIcons/>
    </div>
  );
};

export default sortBy;
