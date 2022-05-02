import React, { useEffect, useState } from "react";
import { listaDeProductos } from "../data/productsData";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
  const [products, setProducts] = useState([]);
  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listaDeProductos.find(item => item.id=== 1));
    }, 2000);
  });

  const getItemData = async () => {
    try {
      const result = await getItem;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert("Error desconocido, no se pueden ver productos!");
    }
  };

  useEffect(() => {
    getItemData();
  }, []);

  return (
    <>
      <div>
          <img
            className="imgProduct"
            src={products.imagen}
            alt="Productos de heladeria"
          />
          <h2 className="productName">{products.nombre}</h2>
          <h2 className="productName">{products.descripcion}</h2>
          <span className="priceProduct">{products.precio}$</span>
        </div>
    </>
  );
};

export default ItemDetail;
