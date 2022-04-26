import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ nombre, precio, imagen, stock, id }) => {
    //funcion cantidad de productos agregados
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} / ${nombre}`);
  };
  return (
  <div>
      <img src={imagen} alt="Productos de heladeria"/>
      <h2>{nombre}</h2>
      <span>{precio}</span>

      <ItemCount stock={stock} onAdd={onAdd} inicial={1}/>
  </div>);
};

export default Item;
