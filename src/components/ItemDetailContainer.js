/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getProductById } from "../data/getData.js";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(Number(1), setProduct);
    console.log(product);
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
