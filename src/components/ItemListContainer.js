import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  return <div style={props.greeting}> 
  <ItemList/>
  </div>;
};

export default ItemListContainer;
