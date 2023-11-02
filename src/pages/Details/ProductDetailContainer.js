import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import Loading from "../../components/Loading/Loading";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = ({ type }) => {
  const { prodId } = useParams();
  const { products, featuredProducts } = useAppContext();
  const productList = type === "featuredProduct" ? featuredProducts : products;

  const selectedProduct = productList.find(
    (product) => product.id === Number(prodId)
  );

  return (
    <>
      {selectedProduct ? <ProductDetail prod={selectedProduct} /> : <Loading />}
    </>
  );
};

export default ProductDetailContainer;