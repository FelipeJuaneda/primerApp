import React from "react";
import videoFondo from "../../videos/heladoDerretido.mp4";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Box, Typography } from "@mui/material";
import SwiperCarousel from "../../components/SwiperCarousel/SwiperCarousel";

function Home() {
  const { text } = useTypewriter({
    words: ["Helado", "Sabor", "Momento"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 100,
    delaySpeed: 2500,
  });
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        top: "0",
        boxShadow: "1px 7px 77px -12px rgba(0, 0, 0, 0.75)",
        WebkitBoxShadow: "1px 7px 77px -12px rgba(0, 0, 0, 0.75)",
        MozBoxShadow: "1px 7px 77px -12px rgba(0, 0, 0, 0.75)",
      }}
      component={"main"}
    >
      <Box
        sx={{
          position: "absolute",
          right: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        autoPlay
        playsInline
        preload="auto"
        muted
        loop
        component={"video"}
      >
        <source src={videoFondo} type="video/mp4" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          backgroundColor: "primary.main",
          padding: "20px",
          borderRadius: "5px",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          width: "80%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: { xs: "5px auto", md: "auto" },
        }}
      >
        <Typography
          sx={{
            margin: { xs: "3px 0", sm: "10px 0" },
            fontSize: { xs: "18px", sm: "30px", md: "45px" },
            color: "whiteMod.main",
            fontFamily: "fontFamily.nav",
            textAlign: "start",
          }}
          component={"h1"}
          id="tituloScroll"
        >
          Disfruta del mejor{" "}
          <Typography
            sx={{
              color: "secondary.main",
              fontSize: { xs: "18px", sm: "30px", md: "45px" },
            }}
            component={"span"}
          >
            {text}
            <Cursor />
          </Typography>
        </Typography>
        <Typography
          sx={{
            color: "primary.parrafo",
            fontFamily: "fontFamily.parrafo",
            fontSize: { xs: "15px", sm: "20px", md: "22.3px" },
            margin: 0,
            textAlign: "start",
          }}
          component={"p"}
        >
          Artesanal por excelencia, con sabor, textura y aroma único
        </Typography>

        <SwiperCarousel />
      </Box>
    </Box>
  );
}

export default Home;
