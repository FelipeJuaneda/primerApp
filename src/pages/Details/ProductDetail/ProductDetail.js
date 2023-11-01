import React, { useState } from "react";
import ItemCount from "../../../components/ItemCount/ItemCount";
import SaboresContainer from "../../../components/Sabores/SaboresContainer";
import BackButtonDetail from "../../../components/BackButtonDetail/BackButtonDetail";
import { Box, Container, Divider, Typography } from "@mui/material";
import FinishBuy from "../../../components/FinishBuy/FinishBuy";

const ProductDetail = ({ prod }) => {
  const [finishBuying, setFinishBuying] = useState(false);
  const onAdd = (qty) => {
    setFinishBuying(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.parrafo",
        display: "grid",
        gap: "20px",
        minHeight: {
          xs: "calc(100vh - 64px)",
          sm: "calc(100vh - 79px)",
          md: "calc(100vh - 89px)",
        },
      }}
      className="itemDetailCont"
    >
      <Container sx={{ paddingTop: "24px" }} fixed>
        <BackButtonDetail />
        <Box sx={{ display: "grid", gap: "20px" }}>
          <Box sx={{ position: "relative" }} className="itemDetailInfo">
            <Box
              sx={{ width: "140px" }}
              component={"img"}
              className="imgProduct"
              src={prod.imagen}
              alt="Productos de heladeria"
            />
            <Typography
              variant={"h1"}
              sx={{ fontSize: "25px" }}
              className="productName"
            >
              {prod.nombre}
            </Typography>
            <Typography
              variant={"h2"}
              sx={{ fontSize: "20px" }}
              className="productDescrip"
            >
              {prod.descripcion}
            </Typography>
            <Typography component={"span"} className="priceProduct">
              Precio: {prod.precio}$
            </Typography>
          </Box>
          <Divider variant="middle" />
          <div>
            {prod.saboresElegidos && (
              <SaboresContainer
                saboresElegidos={prod.saboresElegidos}
                limiteSabor={prod.limiteSabor}
              />
            )}
          </div>
          {finishBuying ? (
            <FinishBuy />
          ) : (
            <ItemCount
              product={prod}
              stock={prod.stock}
              inicial={1}
              onAdd={onAdd}
              id={prod.id}
              saboresElegidos={prod.saboresElegidos}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail;
