import React from "react";
import videoFondo from "../../videos/heladoDerretido.mp4";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import imgUno from "../../images/salsa.jpg";
import imgDos from "../../images/tachos.jpg";
import imgTres from "../../images/bombonHeladoCompania.jpg";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";

function Home() {
  const { text } = useTypewriter({
    words: ["Helado", "Sabor", "Momento"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 100,
    delaySpeed: 2500,
  });
  const imgsList = [imgUno, imgDos, imgTres];
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

        <Box
          sx={{
            width: "100%",
            height: "75%",
            backgroundColor: "primary.main",
            borderRadius: "5px",
            boxShadow: "1px 1px 96px -7px rgba(0, 0, 0, 0.75)",
            WebkitBoxShadow: "1px 1px 96px -7px rgba(0, 0, 0, 0.75)",
            MozBoxShadow: "1px 1px 96px -7px rgba(0, 0, 0, 0.75)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "grab",
          }}
        >
          <Box
            sx={{ width: "100%", height: "100%" }}
            component={Swiper}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {imgsList.map((e) => {
              return (
                <SwiperSlide>
                  <Box
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    component={"img"}
                    loading="lazy"
                    src={e}
                    alt="Imagenes home, en inicio de Hleaderia Artesanal"
                  />
                </SwiperSlide>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
