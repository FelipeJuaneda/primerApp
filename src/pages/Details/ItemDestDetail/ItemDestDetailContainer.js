import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import ItemDestDetail from "./ItemDestDetail";
import "./ItemDestDetail.css";
import Loading from "../../../components/Loading/Loading";

const ItemDestDetailContainer = () => {
  //parametro id en link
  const { itemId } = useParams();
  const [helados, setHelados] = useState({});
  const { products } = useAppContext();

  //seteo el detalle si se encuentra el id a helados
  useEffect(() => {
    setHelados(products.find((h) => h.id === Number(itemId)));
  }, [itemId, products]);

  return <div>{helados ? <ItemDestDetail item={helados} /> : <Loading />}</div>;
};

export default ItemDestDetailContainer;
