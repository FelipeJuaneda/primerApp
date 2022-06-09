import React from "react";
import { Link } from "react-router-dom";
import ProductsCount from "../ItemCount/ProductsCount";
import "./Products.css";

const Products = (item) => {
  //funcion cantidad de productos agregados
  const onAdd = (qty) => {
    console.log(qty);
  };

  return (
    <div className="productCont">
      <Link to={`/product/${item.id}`}>
        <img
          src={item.imagen}
          alt={"productos de heladeria artesanal"}
          className="imageProduct"
        />
      </Link>

      <h2 className="productName">{item.nombre}</h2>
      <div className="precioAñadir">
        <span className="priceProduct">{item.precio}$</span>
        <div>
          <ProductsCount
            stock={item.stock}
            inicial={1}
            onAdd={onAdd}
            id={item.id}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
