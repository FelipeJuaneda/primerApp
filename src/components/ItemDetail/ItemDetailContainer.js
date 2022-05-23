import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useAppContext } from "../context/AppContext";
import GifReload from "../images/heladoGif.gif";
import "./ItemDetail.css"

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
      {helados ? (
        <ItemDetail item={helados} />
      ) : (
        <img className="gifHelado" src={GifReload} alt="gif de helado reload" />
      )}
    </div>
  );
};

export default ItemDetailContainer;
