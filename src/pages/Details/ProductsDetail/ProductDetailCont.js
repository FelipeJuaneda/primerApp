import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import ProductDetail from "./ProductDetail";
import Loading from "../../../components/Loading/Loading";

const ProductDetailCont = () => {
  //parametro id en link
  const { prodId } = useParams();
  const [prod, setProd] = useState({});
  const { productos } = useAppContext();

  //seteo el detalle si se encuentra el id a helados
  useEffect(() => {
    setProd(productos.find((p) => p.id === Number(prodId)));
  }, [prodId, productos]);

  return <div>{prod ? <ProductDetail prod={prod} /> : <Loading />}</div>;
};

export default ProductDetailCont;
