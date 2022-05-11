import React, { useEffect, useState } from "react";
import { getProductsData } from "../../data/getData";
import Item from "./Item";
import GifReload from "../images/heladoGif.gif";

const ItemList = () => {
  //array vacio de porductos
  const [products, setProducts] = useState([]);
  //seteo todos los productos en el array
  useEffect(() => {
    getProductsData(setProducts);
  }, []);
  //y mapeo los productos
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
        <div>
          <img
            className="gifHelado"
            src={GifReload}
            alt="gif de helado reload"
          />
        </div>
      )}
    </>
  );
};

export default ItemList;
