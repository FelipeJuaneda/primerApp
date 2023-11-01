import React, { useEffect, useState } from "react";
import FeaturedProductsList from "../FeaturedProducts/FeaturedProductsList";
import ProductList from "../Products/ProductList";
import { useAppContext } from "../../../context/AppContext";
import { useParams } from "react-router-dom";
import Categories from "../../../components/Categories/Categories";
import { Box } from "@mui/material";

const ProductsContainer = () => {
  const { products, featuredProducts } = useAppContext();
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filtered = products.filter(
        (product) => product.categoria === category
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  return (
    <Box>
      <FeaturedProductsList products={featuredProducts} />
      <Categories />
      <ProductList products={filteredProducts} />
    </Box>
  );
};

export default ProductsContainer;
