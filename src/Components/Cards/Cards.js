import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
const useStyles = makeStyles({
  root: {
    width: "100%"

  },
  media: {
    height: 300,
  },
});

function Cards(Props) {
  const [open, setOpen] = React.useState(false);
  const [Count, setCount] = useState(0);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
};  




  const handleIncrement = () => {

    if (Props.Item.quantity > 0 ) {
      setCount(Count + 1)
      Props.quantityCallBack("increment", Props.index);
    }
    else {
      console.log(Count);
      console.log(Props.Item.quantity)
      handleClick();
     
    }

  }

  const handleDecrement = () => {
      if(Count-1 >= 0){
      setCount(Count - 1)
      Props.quantityCallBack("decrement", Props.index);
      }
   

  }

  const classes = useStyles();
  return (

    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Props.Item.imgURl}
            title="Test"
          />
          <CardContent>

            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography gutterBottom variant="h5" component="h2">
                {Props.Item.Name}
              </Typography>

              <Typography gutterBottom variant="h6" component="h2">
                Quantity:  {Props.Item.quantity}
              </Typography>

            </Box>

            <Typography variant="body2" color="textSecondary" component="p">
              {Props.Item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

        <Box display="flex"  justifyContent="space-between" width="100%" alignItems="center"> 
        <Box> 
 <Typography>
            Price: ${Props.Item.price}
          </Typography>
  </Box>

        <Box display="flex" alignItems="center">
        <Button size="small" color="primary" onClick={handleDecrement}>
            -
        </Button>

          <Typography>
            {Count}
          </Typography>

        
        <Button size="small" color="primary" onClick={handleIncrement}>
            +
        </Button>
</Box>  
 
  <Box> 
      <Button size="medium" color="secondary"> Add to cart</Button>
  </Box>


        </Box>
         
        </CardActions>
      </Card>
      <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Not enough in stock"
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  UNDO
            </Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
    </Grid>
  )


}

export default Cards
