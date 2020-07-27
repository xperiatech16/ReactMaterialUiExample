import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));
export default function DrawerComponent({ open, toggle }) {
  const classes = useStyles();
  const [nestedState, setNestedState] = React.useState(false);

  const handleClick = () => {
    setNestedState(!nestedState);
  };

  return (
    <React.Fragment>
      <Drawer anchor="left" open={open}>
        <List component="nav" className={classes.list}>
          <ListItem button onClick={() => toggle()}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>Inbox</ListItemText>
          </ListItem>
          <ListItem button onClick={() => toggle()}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>Mails</ListItemText>
          </ListItem>

          <ListItem button onClick={() => handleClick()}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>Nested Menu</ListItemText>
            {nestedState ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={nestedState} timeout="auto" unmountOnExit>
            <List component="div" disablePadding />
            <ListItem
              button
              className={classes.nested}
              onClick={() => toggle()}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText>Starred</ListItemText>
            </ListItem>
          </Collapse>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
