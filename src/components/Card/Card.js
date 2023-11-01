import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";

const Card = ({
  id,
  nombre,
  precio,
  saboresElegidos,
  imagen,
  product,
  stock,
  linkTo,
}) => {
  //funcion cantidad de productos agregados
  const onAdd = (qty) => {};
  return (
    <Box
      sx={{
        backgroundColor: `${
          linkTo === "product" ? "primary.main" : "primary.parrafo"
        }`,
        borderRadius: "10px 10px 0 0",
        position: "relative",
      }}
    >
      <Box sx={{ padding: "10px" }}>
        <Link to={`/${linkTo}/${id}`}>
          <Box
            component="img"
            loading="lazy"
            src={imagen}
            alt="Productos de heladeria"
            sx={{
              width: { xs: "200px", sm: "250px" },
              height: { xs: "200px", sm: "250px" },
              objectFit: "cover",
              filter: "drop-shadow(0px 9px 13px rgba(0, 0, 0, 0.5))",
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                filter: "drop-shadow(0px 0px 13px rgba(0, 0, 0, 0.5))",
              },
            }}
          />
        </Link>
        <Typography component="h2" sx={{ margin: 0 }}>
          {nombre}
        </Typography>
        <Typography component="span">{precio}$</Typography>
      </Box>

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

export default Card;
