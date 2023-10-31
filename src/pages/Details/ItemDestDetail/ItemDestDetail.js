import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../../components/ItemCount/ItemCount";
import SaboresContainer from "../../../components/Sabores/SaboresContainer";
import "./ItemDestDetail.css";
import BackButtonDetail from "../../../components/BackButtonDetail/BackButtonDetail";

const ItemDestDetail = ({ item }) => {
  //estado de terminar compra
  const [terminarCompra, setTerminarCompra] = useState(false);
  //funcion desaparece boton añadir, y agrega terminar compra
  const onAdd = (qty) => {
    setTerminarCompra(true);
  };

  return (
    <div className="itemDetailCont">
      <BackButtonDetail />
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
          product={item}
          stock={item.stock}
          inicial={1}
          onAdd={onAdd}
          id={item.id}
          saboresElegidos={item.saboresElegidos}
        />
      )}
    </div>
  );
};

export default ItemDestDetail;
