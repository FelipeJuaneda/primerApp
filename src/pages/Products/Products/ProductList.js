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
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          linkTo={"product"}
          saboresElegidos={null}
          {...product}
        />
      ))}
    </Box>
  );
};

export default ProductList;
