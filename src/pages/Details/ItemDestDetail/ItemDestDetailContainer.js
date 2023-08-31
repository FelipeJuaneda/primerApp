import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import GifReload from "../../../images/heladoGif.gif";
import ItemDestDetail from "./ItemDestDetail";
import "./ItemDestDetail.css";

const ItemDestDetailContainer = () => {
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
        <ItemDestDetail item={helados} />
      ) : (
        <img className="gifHelado" src={GifReload} alt="gif de helado reload" />
      )}
    </div>
  );
};

export default ItemDestDetailContainer;
