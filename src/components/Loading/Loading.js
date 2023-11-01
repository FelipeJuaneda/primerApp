import React from "react";
import GifReload from "../../images/heladoGif.gif";
import { Box } from "@mui/material";
const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{ width: "15%", paddingRight: "10px" }}
        className="gifHelado"
        src={GifReload}
        component={"img"}
        alt="gif de helado cargando..."
      />
    </Box>
  );
};

export default Loading;
