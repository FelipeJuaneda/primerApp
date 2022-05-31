import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import SaboresContainer from "../Sabores/SaboresContainer";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  //estado de terminar compra
  const [terminarCompra, setTerminarCompra] = useState(false);
  //funcion desaparece boton añadir, y agrega terminar compra
  const onAdd = (qty) => {
    setTerminarCompra(true);
    console.log(qty);
  };

  return (
    <div className="itemDetailCont">
      <div className="itemDetailInfo">
        <img
          className="imgProduct"
          src={item.imagen}
          alt="Productos de heladeria"
        />
        <h2 className="productName">{item.nombre}</h2>
        <h2 className="productDescrip">{item.descripcion}</h2>
        <span className="priceProduct">Precio: {item.precio}$</span>
      </div>
      <div>
        <SaboresContainer
          saboresElegidos={item.saboresElegidos}
          limiteSabor={item.limiteSabor}
        />
      </div>
      {terminarCompra ? (
        <div className="contTerminarCompra">
          <Link className="botonTerminarCompra" to="/cart">
            <span className="hover-underline-animationTerminar">
              {" "}
              Terminar Compra{" "}
            </span>
          </Link>
        </div>
      ) : (
        <ItemCount
          stock={item.stock}
          inicial={1}
          onAdd={onAdd}
          id={item.id}
          saboresElegidos={item.saboresElegidos}
        />
      )}
      <Link className="volverAtras" to={"/items"}>
        Volver Atras
      </Link>
    </div>
  );
};

export default ItemDetail;
