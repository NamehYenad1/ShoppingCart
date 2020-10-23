import React from "react";


import Toolbar from "@material-ui/core/Toolbar";

import TopBar from "./Components/NavBar/AppBar";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ScrollToTop from "./Components/ScrollToTop/ScrollTop";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  anchor:{
    width: "10px !important",
    height: "10px !important",
  

  }
}));

function App() {



  const classes = useStyles();
  return (
    


    
    <div className={classes.root}>
      
      <CssBaseline />
    
      <TopBar />
      
     

      <Toolbar id="back-to-top-anchor" className={classes.anchor}/>
      <ScrollToTop />
    </div>
  );
}

export default App;
