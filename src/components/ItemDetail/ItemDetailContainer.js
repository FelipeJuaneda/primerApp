import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useAppContext } from "../context/AppContext";

const ItemDetailContainer = () => {
  //parametro id en link
  const { itemId } = useParams();
  const [helados, setHelados] = useState({});

  const { products } = useAppContext();

  //seteo el detalle si se encuentra el id a helados
  useEffect(() => {
    setHelados(products.find((h) => h.id == itemId));
  }, [itemId, products]);

  return (
    <div>
      {helados ? <ItemDetail item={helados} /> : <p>Obteniendo producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
