import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import GifReload from "../../../images/heladoGif.gif";
import ProductDetail from "./ProductDetail";

const ProductDetailCont = () => {
  //parametro id en link
  const { prodId } = useParams();
  const [prod, setProd] = useState({});
  const { productos } = useAppContext();

  //seteo el detalle si se encuentra el id a helados
  useEffect(() => {
    setProd(productos.find((p) => p.id == prodId));
  }, [prodId, productos]);

  return (
    <div>
      {prod ? (
        <ProductDetail prod={prod} />
      ) : (
        <img className="gifHelado" src={GifReload} alt="gif de helado reload" />
      )}
    </div>
  );
};

export default ProductDetailCont;
