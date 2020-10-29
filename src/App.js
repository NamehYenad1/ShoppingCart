import React,{useState} from "react";


import Toolbar from "@material-ui/core/Toolbar";

import TopBar from "./Components/NavBar/AppBar";
import { makeStyles, useTheme,ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ScrollToTop from "./Components/ScrollToTop/ScrollTop";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {Switch, Paper,Container,Box} from "@material-ui/core"; 


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

  const[darkMode, setDarkMode] = useState(false);


  const theme = createMuiTheme({
palette: {
    type: darkMode ? "dark" : "light",

},

  });


  const darkModeCallBack = (call) => {
      setDarkMode(call);

  }

  const classes = useStyles();
  return (
    


      <ThemeProvider theme={theme}> 
      <Box className={classes.root} elevation={0}>
      <CssBaseline />
    
      <TopBar darkMode={darkMode}  darkModeCallBack = {darkModeCallBack}/>
      
     

      <Toolbar id="back-to-top-anchor" className={classes.anchor}/>
      <ScrollToTop />

      <Switch checked ={darkMode} onChange={()=>setDarkMode(!darkMode)} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
