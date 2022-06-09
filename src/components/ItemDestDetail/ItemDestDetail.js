import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import SaboresContainer from "../Sabores/SaboresContainer";
import "./ItemDestDetail.css";

const ItemDestDetail = ({ item }) => {
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
      <Link className="volverAtrasDetail" to={"/items"}>
        <svg
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1024 1024"
        >
          <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
        </svg>
        <span>Volver</span>
      </Link>
    </div>
  );
};

export default ItemDestDetail;
