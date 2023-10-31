import { Box } from "@mui/material";
import Products from "./Products";
const ProductList = ({ products }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "60px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0 20px 0",
      }}
      className="contenedorProductos"
    >
      {products.map((product) => {
        return (
          <Products
            product={product}
            key={product.id}
            nombre={product.nombre}
            imagen={product.imagen}
            precio={product.precio}
            stock={product.stock}
            id={product.id}
            descripcion={product.descripcion}
          />
        );
      })}
    </Box>
  );
};

export default ProductList;
