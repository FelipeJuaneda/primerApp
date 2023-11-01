import React, { useState } from "react";
import ItemCount from "../../../components/ItemCount/ItemCount";
import SaboresContainer from "../../../components/Sabores/SaboresContainer";
import BackButtonDetail from "../../../components/BackButtonDetail/BackButtonDetail";
import FinishBuy from "../../../components/FinishBuy/FinishBuy";
import { Box, Container, Divider, Typography } from "@mui/material";
import swal from "sweetalert";

const ProductDetail = ({ prod }) => {
  const [finishBuying, setFinishBuying] = useState(false);
  const [saborElegido, setSaborElegido] = useState([]);

  const onAdd = (qty) => {
    // if (prod.saboresElegidos && saborElegido.length === 0) {
    //   swal({
    //     title: "Debes agregar sabores primero!",
    //     icon: "warning",
    //     timer: "4500",
    //   });
    //   return;
    // }
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

        <Box sx={{ display: "grid", gap: "20px" }} className="itemDetailInfo">
          <Box>
            <Box
              component={"img"}
              src={prod.imagen}
              sx={{ width: { xs: "140px", sm: "200px", md: "270px" } }}
              alt="Productos de heladeria"
              className="imgProduct"
            />
            <Typography
              variant="h1"
              sx={{ fontSize: "25px" }}
              className="productName"
            >
              {prod.nombre}
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: "20px" }}
              className="productDescrip"
            >
              {prod.descripcion}
            </Typography>
            <Typography component="span" className="priceProduct">
              Precio: {prod.precio}$
            </Typography>
          </Box>

          <Divider variant="middle" />

          {prod.saboresElegidos && (
            <SaboresContainer
              setSaborElegido={setSaborElegido}
              saborElegido={saborElegido}
              saboresElegidos={prod.saboresElegidos}
              limiteSabor={prod.limiteSabor}
              finishBuying={finishBuying}
            />
          )}

          {finishBuying ? (
            <FinishBuy />
          ) : (
            <ItemCount
              product={prod}
              stock={prod.stock}
              inicial={1}
              onAdd={onAdd}
              id={prod.id}
              saborElegido={saborElegido}
              saboresElegidos={prod.saboresElegidos}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail;
