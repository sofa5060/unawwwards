import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthContext } from "../Contexts/AuthContext";

const useStyles = makeStyles({
  list: {
    width: 300
  }
});

export default function SideNav() {
  const { showForm, currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button>
          {currentUser ? (
            <ListItemText
              primary={currentUser.displayName}
            />
          ) : (
            <ListItemText primary={"Login / Register"} onClick={showForm} />
          )}
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Nominees"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Winners"} />
        </ListItem>
      </List>
      <div className="bottom">
        <h6>&copy; UnAwwwards. 2020</h6>
      </div>
    </div>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer("left", true)} />
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
