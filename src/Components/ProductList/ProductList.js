import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Grid from "@material-ui/core/Grid";
function ProductList(Props) {
  const [BagArray, setBagArray] = useState([
    {
      id:0,
      Name: "Bag1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      quantity: 2,
      imgURl:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      id:1,
      Name: "Bag2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      quantity: 100,
      imgURl:
        "https://images.unsplash.com/photo-1520946708818-4966701c25e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:2,
      Name: "Bag3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      quantity: 100,
      imgURl:
        "https://images.unsplash.com/photo-1520946708818-4966701c25e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:3,
      Name: "Bag4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      quantity: 100,
      imgURl:
        "https://images.unsplash.com/photo-1520946708818-4966701c25e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },

  ]);
  if (Props.Category === "Bags") {
    

    const quantityCallBack = (operation, postition) => {
      if (operation == "increment") {
        console.log(postition);
        var index = BagArray.findIndex(x => x.id === postition);
        if (index === -1) {
          console.log("Cant increase the value")
        }

        else {
          console.log("hits");
          let test = BagArray[index].quantity;
          setBagArray(
           [
              ...BagArray.slice(0, index),
              Object.assign({}, BagArray[index],  {
                id:index,
                Name: "Bag3",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                quantity: test-1,
                imgURl:
                  "https://images.unsplash.com/photo-1520946708818-4966701c25e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
              } ),
              ...BagArray.slice(index + 1)
            ]
          );
        
        }


      }

      else if (operation == "decrement") {


      }

    }


    return (
      <div>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {BagArray.map((x,arrayIndex) => (
            <Cards Item={x} index ={arrayIndex}
            quantityCallBack={quantityCallBack}
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
