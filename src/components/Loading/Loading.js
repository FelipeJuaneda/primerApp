import React from "react";
import GifReload from "../../images/heladoGif.gif";
import { Box } from "@mui/material";
const Loading = () => {
  return (
    <Box
      sx={{ width: "15%", paddingRight: "10px" }}
      className="gifHelado"
      src={GifReload}
      component={"img"}
      alt="gif de helado cargando..."
    />
  );
};

export default Loading;
