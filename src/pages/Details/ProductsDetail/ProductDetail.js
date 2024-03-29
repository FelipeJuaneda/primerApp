import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsCount from "../../../components/ItemCount/ProductsCount";
import "./ProductDetail.css";
import BackButtonDetail from "../../../components/BackButtonDetail/BackButtonDetail";

const ProductDetail = ({ prod }) => {
  //estado de terminar compra
  const [terminarCompra, setTerminarCompra] = useState(false);
  //funcion desaparece boton añadir, y agrega terminar compra
  const onAdd = (qty) => {
    setTerminarCompra(true);
    console.log(qty);
  };

  return (
    <div className="productDetail">
      <BackButtonDetail />
      <div className="productDetailInfo">
        <img
          className="imgProducto"
          src={prod.imagen}
          alt="Productos de heladeria"
        />
        <h2 className="productNombre">{prod.nombre}</h2>
        <span className="precioProduct">Precio: {prod.precio}$</span>
      </div>

      {terminarCompra ? (
        <div className="contTerminarCompraProduct">
          <Link className="botonTerminarCompra" to="/cart">
            <span className="hover-underline-animationTerminar">
              {" "}
              Terminar Compra{" "}
            </span>
          </Link>
        </div>
      ) : (
        <div className="descripcionContador">
          <p className="productDescripcion">{prod.descripcion}</p>
          <ProductsCount
            stock={prod.stock}
            inicial={1}
            onAdd={onAdd}
            id={prod.id}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
