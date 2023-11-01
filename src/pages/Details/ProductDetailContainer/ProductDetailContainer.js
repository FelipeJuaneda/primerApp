import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import Loading from "../../../components/Loading/Loading";
import ItemDetail from "../ProductDetail/ProductDetail";

const ProductDetailContainer = ({ type }) => {
  const { prodId } = useParams();
  const { products, featuredProducts } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState({});
  const productList = type === "featuredProduct" ? featuredProducts : products;

  useEffect(() => {
    const productToDisplay = productList.find(
      (product) => product.id === Number(prodId)
    );
    setSelectedProduct(productToDisplay);
  }, [productList, prodId, products]);

  return (
    <>{selectedProduct ? <ItemDetail prod={selectedProduct} /> : <Loading />}</>
  );
};

export default ProductDetailContainer;
