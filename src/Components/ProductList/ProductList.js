import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Grid from "@material-ui/core/Grid";
function ProductList(Props) {
  
  if (Props.Category === "Bags") {
    

    


    return (
      <div>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {Props.BagArray.map((x,arrayIndex) => (
            <Cards Item={x} index ={arrayIndex}
            quantityCallBack={Props.quantityCallBack}
            key ={arrayIndex}
            />
          ))}
        </Grid>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ProductList;
