import React from "react";
import ItemList from "./ItemList";
import "./styles/Items.css";

const ItemListContainer = (props) => {
  return (
    <div className="contenedorProductos">
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
