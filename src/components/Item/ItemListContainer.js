import React from "react";
import ItemList from "./ItemList";
import "./Items.css";

const ItemListContainer = (props) => {
  return (
    <div className="contenedorProductos">
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
