import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  makeStyles,
} from "@material-ui/core";

const user = {
  avatar: "/images/Radical-Logo-Final-2021-v2.jpg",
};

const useStyles = makeStyles(() => ({
  // root: {},
  avatar: {
    borderRadius: 0,
    height: 50,
    width: 200,
  },
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={user.avatar} />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
