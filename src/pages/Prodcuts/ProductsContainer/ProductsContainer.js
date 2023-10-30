import React, { useEffect, useState } from "react";
import ItemDestList from "../ItemDest/ItemDestList";
import ProductList from "../ProductsCategorie/ProductList";
import { useAppContext } from "../../../context/AppContext";
import { useParams } from "react-router-dom";
import "../ProductsCategorie/Products.css";
import Categories from "../../../components/Categories/Categories";
import { Box, Typography } from "@mui/material";

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
      <Typography
        sx={{
          fontSize: { xs: "30px", sm: "37px" },
          fontFamily: "fontFamily.nav",
          paddingTop: "50px",
          color: "primary.main",
        }}
        className="productDestacadosTitle"
      >
        Productos Destacados
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: { xs: "30px", sm: "55px", md: "110px" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "60px 0",
          backgroundColor: "whiteMod.main",
        }}
        className="contenedorProductosDestacados"
      >
        <ItemDestList products={products} />
      </Box>

      <Categories />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        className="contenedorProductos"
      >
        <ProductList productos={helados} />
      </Box>
    </Box>
  );
};

export default ProductsContainer;
