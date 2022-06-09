import React, { useEffect, useState } from "react";
import ItemDestList from "./ItemDestList";
import ProductList from "../Products/ProductList";
import { useAppContext } from "../context/AppContext";
import "./Items.css";
import "../Products/Products.css";
import { Link, useParams } from "react-router-dom";

const ItemDestListContainer = () => {
  const { products, productos } = useAppContext();
  const { category } = useParams();
  const [helados, setHelados] = useState(productos);

  //seteo en helados los productos filtrados
  useEffect(() => {
    if (category) {
      setHelados(productos.filter((h) => h.categoria === category));
    } else {
      setHelados(productos);
    }
  }, [category, productos]);

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
        <ProductList productos={helados} />
      </div>
    </div>
  );
};

export default ItemDestListContainer;
