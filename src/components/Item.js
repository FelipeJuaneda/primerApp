import React from "react";
import ItemCount from "./ItemCount";
import "./styles/Items.css";

const Item = ({ nombre, precio, imagen, stock, id }) => {
    //funcion cantidad de productos agregados
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} / ${nombre}`);
  };
  return (
  <div className="cardProduct">
      <img className="imgProduct" src={imagen} alt="Productos de heladeria"/>
      <h2 className="productName">{nombre}</h2>
      <span className="priceProduct">{precio}$</span>

      <ItemCount stock={stock} onAdd={onAdd} inicial={1}/>
  </div>);
};

export default Item;
