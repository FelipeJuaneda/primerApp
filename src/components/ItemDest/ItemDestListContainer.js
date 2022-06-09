import React from "react";
import ItemDestList from "./ItemDestList";
import ProductList from "../Products/ProductList";
import { useAppContext } from "../context/AppContext";
import "./Items.css";
import "../Products/Products.css";
import { Link } from "react-router-dom";

const ItemDestListContainer = () => {
  const { products, productos } = useAppContext();

  return (
    <div>
      <h2 className="productDestacadosTitle">Productos Destacados</h2>
      <div className="contenedorProductosDestacados">
        <ItemDestList products={products} />
      </div>
      <div>
        <div>Selecciona categoria</div>
        <Link to={"/items/palito"}>Palitos</Link>
        <Link to={"/items/torta"}>Tortas Heladas</Link>
      </div>
      <div className="contenedorProductos">
        <ProductList productos={productos} />
      </div>
    </div>
  );
};

export default ItemDestListContainer;
