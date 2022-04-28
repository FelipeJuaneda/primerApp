import React, { useEffect, useState } from "react";
import { listaDeProductos } from "../data/productsData";
import Item from "./Item";


const ItemList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listaDeProductos);
    }, 2000);
  });

  const getProductsData = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert("Error desconocido, no se pueden ver productos!");
    }
  };

  useEffect(() => {
    getProductsData();
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
