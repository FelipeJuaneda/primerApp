import React, { useEffect, useState } from "react";
import ItemDestList from "./ItemDestList";
import ProductList from "../Products/ProductList";
import { useAppContext } from "../context/AppContext";
import { Link, NavLink, useParams } from "react-router-dom";
import "./Items.css";
import "../Products/Products.css";
import "./Categorias.css";

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

      <div className="categoriasCont">
        <div className="tituloCategorias">Categorias</div>
        <div className="categoriaItems">
          <NavLink
            activeclassname="categoriaActiva"
            className={"itemCat"}
            to={"/items/palito"}
          >
            Palitos
          </NavLink>
          <NavLink
            activeclassname="categoriaActiva"
            className={"itemCat"}
            to={"/items/torta"}
          >
            Tortas Heladas
          </NavLink>
          <NavLink
            activeclassname="categoriaActiva"
            className={"itemCat"}
            to={"/items/alfajor"}
          >
            Alfajores
          </NavLink>
        </div>
      </div>
      <div className="contenedorProductos">
        <ProductList productos={helados} />
      </div>
    </div>
  );
};

export default ItemDestListContainer;
