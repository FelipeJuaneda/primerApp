import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import Loading from "../../../components/Loading/Loading";
import ItemDetail from "../ProductDetail/ProductDetail";

const ProductDetailContainer = ({ type }) => {
  const { prodId } = useParams();
  const { products, featuredProducts } = useAppContext();
  const [prod, setProd] = useState({});
  const depende = type === "featuredProduct" ? featuredProducts : products;
  useEffect(() => {
    setProd(depende.find((p) => p.id === Number(prodId)));
  }, [depende, prodId, products]);

  return <>{prod ? <ItemDetail type="product" prod={prod} /> : <Loading />}</>;
};

export default ProductDetailContainer;
