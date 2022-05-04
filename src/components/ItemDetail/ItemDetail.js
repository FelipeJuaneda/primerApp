import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty}`);
  };
  return (
    <div className="itemDetailCont">
      <img
        className="imgProduct"
        src={item.imagen}
        alt="Productos de heladeria"
      />
      <h2 className="productName">{item.nombre}</h2>
      <h2 className="productName">{item.descripcion}</h2>
      <span className="priceProduct">{item.precio}$</span>
      <ItemCount stock={item.stock} inicial={1} onAdd={onAdd} />
      <Link to={"/"}>Volver Atras</Link>
    </div>
  );
};

export default ItemDetail;
