import React, { useEffect, useState } from "react";
import ItemDestList from "./ItemDestList";
import ProductList from "../ProductsCategorie/ProductList";
import { useAppContext } from "../../../context/AppContext";
import { useParams } from "react-router-dom";
import "./Items.css";
import "../ProductsCategorie/Products.css";
import Categories from "../../../components/Categories/Categories";

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

      <Categories />

      <div className="contenedorProductos">
        <ProductList productos={helados} />
      </div>
    </div>
  );
};

export default ItemDestListContainer;
