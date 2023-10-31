import React, { useEffect, useState } from "react";
import FeaturedProductsList from "../FeaturedProducts/FeaturedProductsList";
import ProductList from "../Products/ProductList";
import { useAppContext } from "../../../context/AppContext";
import { useParams } from "react-router-dom";
import Categories from "../../../components/Categories/Categories";
import { Box } from "@mui/material";

const ProductsContainer = () => {
  const { products, productos } = useAppContext();
  const { category } = useParams();
  const [helados, setHelados] = useState(productos);

  //seteo en helados los productos filtrados
  useEffect(() => {
    if (category) {
      setHelados(productos.filter((h) => h.categoria === category));
    } else {
      setHelados(productos);
    }
  }, [category, productos]);

  return (
    <Box>
      <FeaturedProductsList products={products} />
      <Categories />
      <ProductList products={helados} />
    </Box>
  );
};

export default ProductsContainer;
