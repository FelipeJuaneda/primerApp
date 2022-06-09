import React from "react";
import ItemDestList from "./ItemDestList";
import ProductList from "../Products/ProductList";
import { useAppContext } from "../context/AppContext";
import "./Items.css";
import "../Products/Products.css";

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
        <span>Palitos</span>
        <span>Tortas Heladas</span>
      </div>
      <div className="contenedorProductos">
        <ProductList productos={productos} />
      </div>
    </div>
  );
};

export default ItemDestListContainer;
