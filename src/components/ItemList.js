import React, { useEffect, useState } from "react";
import { getProductsData } from "../data/getData";
import Item from "./Item";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProductsData(setProducts);
  }, []);

  return (
    <>
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  nombre={product.nombre}
                  imagen={product.imagen}
                  precio={product.precio}
                  stock={product.stock}
                  id={product.id}
                  descripcion={product.descripcion}
                />
              </div>
            );
          })}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </>
  );
};

export default ItemList;
