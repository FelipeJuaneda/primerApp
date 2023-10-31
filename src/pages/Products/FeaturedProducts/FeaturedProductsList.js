import { Box, Typography } from "@mui/material";
import Loading from "../../../components/Loading/Loading";
import Card from "../../../components/Card/Card";

const FeaturedProductsList = ({ products }) => {
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
        {products.length ? (
          <>
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  product={product}
                  linkTo={"item"}
                  nombre={product.nombre}
                  imagen={product.imagen}
                  precio={product.precio}
                  stock={product.stock}
                  id={product.id}
                  descripcion={product.descripcion}
                  saboresElegidos={product.saboresElegidos}
                />
              );
            })}
          </>
        ) : (
          <Loading />
        )}
      </Box>
    </Box>
  );
};

export default FeaturedProductsList;