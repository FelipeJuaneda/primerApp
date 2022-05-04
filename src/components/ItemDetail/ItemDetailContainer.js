/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { listaDeProductos } from "../../data/productsData.js";

const ItemDetailContainer = ({ id }) => {
  const {itemId} = useParams();
  const [helados, setHelados] = useState({})

  useEffect(() => {
    setHelados(listaDeProductos.find(h => h.id == itemId ))
  }, [itemId]);

  return (
    <div>
      {helados ? <ItemDetail item={helados} /> : <p>Obteniendo producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
