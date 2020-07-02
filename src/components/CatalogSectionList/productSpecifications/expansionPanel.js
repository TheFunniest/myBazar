import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const Styles = makeStyles({
  body1: {
    fontWeight: "600",
  },
  ExpansionPanelRoot: {
    boxShadow: "none",
    margin: "0 !important",
    "&::before": {
      display: "none !important",
    },
  },
  expansionPanelText: {
    padding: 0,
  },
  MuiExpansionPanelSummaryContent: {},
  IconButton: {
    padding: "0 5px 10px",
    margin: 0,
  },
  divider: {
    width: "100%",
    position: "absolute",
    bottom: "13%",
  },
  PanelDetails: {
    padding: 0,
  },
});

const ExpanPanel = (props) => {
  const [expand, setExpand] = useState(false);
  const classes = Styles();
  const HandleExpand = (e, cond) => {
    setExpand(cond);
  };
  return (
    <ExpansionPanel
      expanded={expand}
      classes={{
        root: classes.ExpansionPanelRoot,
      }}
      onChange={HandleExpand}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        classes={{
          root: classes.expansionPanelText,
        }}
      >
        <Typography
          classes={{
            body1: classes.body1,
          }}
          variant="body1"
        >
          {props.title}
        </Typography>
        <Divider className={classes.divider} />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        classes={{
          root: classes.PanelDetails,
        }}
      >
        {props.type}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExpanPanel;
