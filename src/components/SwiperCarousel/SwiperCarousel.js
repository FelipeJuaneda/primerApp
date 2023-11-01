import React from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import imgUno from "../../images/salsa.jpg";
import imgDos from "../../images/tachos.jpg";
import imgTres from "../../images/bombonHeladoCompania.jpg";

const SwiperCarousel = () => {
  const imgsList = [imgUno, imgDos, imgTres];

  return (
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
        lazy={true}
        navigation
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {imgsList.map((imgSrc) => (
          <SwiperSlide key={imgSrc}>
            <Box
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              component={"img"}
              loading="lazy"
              src={imgSrc}
              alt="Imagen en el inicio de Heladeria Artesanal"
            />
          </SwiperSlide>
        ))}
      </Box>
    </Box>
  );
};

export default SwiperCarousel;
