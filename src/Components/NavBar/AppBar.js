import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Cart from "../Cart/Cart";
import ProductList from "../ProductList/ProductList";
import MSwitch from "@material-ui/core/Switch";
import BagsData from "../../DataFolder/BagsData";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "black",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

function TopBar(Props) {
  const [BagArray, setBagArray] = useState(BagsData);
  const classes = useStyles();
  const quantityCallBack = (operation, postition) => {
    if (operation === "increment") {
      console.log(postition);
      var index = BagArray.findIndex(x => x.id === postition);
      if (index === -1) {
        console.log("Cant increase the value");
      } else {
        console.log("hits");
        let test = BagArray[index].quantity;
        setBagArray([
          ...BagArray.slice(0, index),
          Object.assign({}, BagArray[index], {
            id: index,
            Name: BagArray[index].Name,
            description: BagArray[index].description,
            quantity: test - 1,
            imgURl: BagArray[index].imgURl
          }),
          ...BagArray.slice(index + 1)
        ]);
      }
    } else if (operation === "decrement") {
      console.log(postition);
      var index = BagArray.findIndex(x => x.id === postition);
      if (index === -1) {
        console.log("Cant increase the value");
      } else {
        console.log("hits");
        let test = BagArray[index].quantity;
        setBagArray([
          ...BagArray.slice(0, index),
          Object.assign({}, BagArray[index], {
            id: index,
            Name: BagArray[index].Name,
            description: BagArray[index].description,
            quantity: test + 1,
            imgURl: BagArray[index].imgURl
          }),
          ...BagArray.slice(index + 1)
        ]);
      }
    }
  };

  const [items, setItems] = useState();

  const [DropDownOpen, DropDownSetOpen] = React.useState(false);

  const handleClick = () => {
    DropDownSetOpen(!DropDownOpen);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const StyledBadge = withStyles(theme => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px"
    }
  }))(Badge);

  return (
    <React.Fragment>
      <Router>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Link to="/Cart" className="Links">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="secondary">
                  <ShoppingCartIcon style={{ fontSize: 30, color: "white" }} />
                </StyledBadge>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                {" "}
                <InboxIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Rewards"} />
              {DropDownOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={DropDownOpen} timeout="auto" unmountOnExit>
              <Link to="/Cups" className="Links">
                <ListItem button key="Cups" className={classes.nested}>
                  <ListItemIcon>
                    
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Cups"} />
                </ListItem>
              </Link>
              <Link to="/Bags" className="Links">
                <ListItem button key="Bags" className={classes.nested}>
                  <ListItemIcon>
                   
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Bags"} />
                </ListItem>
              </Link>
            </Collapse>
          </List>

          <Divider />

          <List>
            <Link to="/Login" className="Links">
              <ListItem button key="Login">
                <ListItemIcon>
                  {" "}
                  <InboxIcon />{" "}
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItem>
            </Link>
            <Link to="/SignUp" className="Links">
              <ListItem button key="SignUp">
                <ListItemIcon>
                  {" "}
                  <InboxIcon />{" "}
                </ListItemIcon>
                <ListItemText primary={"SignUp"} />
              </ListItem>
            </Link>

            <ListItem>
              <MSwitch
                checked={Props.darkMode}
                onChange={() => Props.darkModeCallBack(!Props.darkMode)}
              />
            </ListItem>
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>

            <Route path="/SignUp" exact component={SignUp}>
              <SignUp />
            </Route>

            <Route path="/Cups">
              <ProductList Category="Cups" />
            </Route>

            <Route path="/Bags">
              <ProductList
                Category="Bags"
                BagArray={BagArray}
                quantityCallBack={quantityCallBack}
              />
            </Route>

            <Route path="/Cart">
              <Cart />
            </Route>
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default TopBar;
