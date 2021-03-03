import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import FaceIcon from "@material-ui/icons/Face";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { Link } from "react-router-dom";
import Profile from "components/views/Profile";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NavList() {
  const classes = useStyles();
  const [leave, setLeave] = React.useState(false);
  const handleClickLeave = () => {
    setLeave(!leave);
  };

  return (
    <List>
      <Profile />
      <Link to="detailView" style={{ textDecoration: "none", color: "black" }}>
        <ListItem button>
          <ListItemIcon>
            <FaceIcon style={{ color: "blue" }} />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
      </Link>

      <ListItem button>
        <ListItemIcon>
          <WorkOutlineIcon style={{ color: "gray" }} />
        </ListItemIcon>
        <ListItemText primary="Work Management" />
      </ListItem>

      <ListItem button onClick={handleClickLeave}>
        <ListItemIcon>
          <EventAvailableIcon style={{ color: "violet" }} />
        </ListItemIcon>
        <ListItemText primary="Leave Management" />
        {leave ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={leave} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="request" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SendIcon style={{ color: "blue" }} />
              </ListItemIcon>

              <ListItemText primary="Request" />
            </ListItem>
          </Link>
          <Link
            to="leavestatus"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <CheckCircleOutlineIcon style={{ color: "green" }} />
              </ListItemIcon>

              <ListItemText primary="Leave Status" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon style={{ color: "orange" }} />
        </ListItemIcon>
        <ListItemText primary="Payroll Management" />
      </ListItem>
      <Link to="calender" style={{ textDecoration: "none", color: "black" }}>
        <ListItem button>
          <ListItemIcon>
            <DateRangeIcon style={{ color: "green" }} />
          </ListItemIcon>

          <ListItemText primary="Work Calender" />
        </ListItem>
      </Link>
    </List>
  );
}
