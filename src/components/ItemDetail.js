import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty}`);
  };
  return (
    <div>
      <img
        className="imgProduct"
        src={item.imagen}
        alt="Productos de heladeria"
      />
      <h2 className="productName">{item.nombre}</h2>
      <h2 className="productName">{item.descripcion}</h2>
      <span className="priceProduct">{item.precio}$</span>
      <ItemCount stock={item.stock} inicial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
