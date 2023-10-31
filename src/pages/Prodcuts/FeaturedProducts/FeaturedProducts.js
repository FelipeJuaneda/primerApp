import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../../components/ItemCount/ItemCount";
import { Box, Typography } from "@mui/material";
import swal from "sweetalert";

const FeaturedProducts = ({
  id,
  nombre,
  precio,
  saboresElegidos,
  imagen,
  product,
  stock,
}) => {
  //funcion cantidad de productos agregados
  const onAdd = (qty) => {};
  return (
    <Box
      className="cardProduct"
      sx={{
        padding: "30px",
        backgroundColor: "primary.parrafo",
        borderRadius: "10px 10px 0 0",
        position: "relative",
        height: { xs: "352px", sm: "395px" },
        width: { xs: "247px", sm: "260px" },
      }}
    >
      <Link to={`/item/${id}`}>
        <Box
          component="img"
          loading="lazy"
          className="imgProduct"
          src={imagen}
          alt="Productos de heladeria"
          sx={{
            width: { xs: "200px", sm: "250px" },
            filter: "drop-shadow(0px 9px 13px rgba(0, 0, 0, 0.5))",
            transition: "all 0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              filter: "drop-shadow(0px 0px 13px rgba(0, 0, 0, 0.5))",
            },
          }}
        />
      </Link>
      <Typography component="h2" className="productName" sx={{ margin: 0 }}>
        {nombre}
      </Typography>
      <Typography component="span" className="priceProduct">
        {precio}$
      </Typography>

      <ItemCount
        product={product}
        stock={stock}
        onAdd={onAdd}
        inicial={1}
        id={id}
        saboresElegidos={saboresElegidos}
      />
    </Box>
  );
};

export default FeaturedProducts;
