import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Items.css";

const Item = (item) => {
  //funcion cantidad de productos agregados
  const onAdd = (qty) => {
    console.log(qty);
  };
  return (
    <div className="cardProduct">
      <Link to={`/item/${item.id}`}>
        <img
          className="imgProduct"
          src={item.imagen}
          alt="Productos de heladeria"
        />
      </Link>
      <h2 className="productName">{item.nombre}</h2>
      <span className="priceProduct">{item.precio}$</span>

      <ItemCount
        stock={item.stock}
        onAdd={onAdd}
        inicial={1}
        id={item.id}
        saboresElegidos={item.saboresElegidos}
        limiteSabor={item.limiteSabor}
      />
    </div>
  );
};

export default Item;
