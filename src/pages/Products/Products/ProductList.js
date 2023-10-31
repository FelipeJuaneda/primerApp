import { Box } from "@mui/material";
import Card from "../../../components/Card/Card";
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
          <Card
            key={product.id}
            product={product}
            linkTo={"product"}
            nombre={product.nombre}
            imagen={product.imagen}
            precio={product.precio}
            stock={product.stock}
            id={product.id}
            descripcion={product.descripcion}
            saboresElegidos={null}
          />
        );
      })}
    </Box>
  );
};

export default ProductList;
