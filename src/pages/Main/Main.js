import React from "react";
import "./Main.css";
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

function MainComp() {
  //Typewriter para el titulo
  const { text } = useTypewriter({
    words: ["Helado", "Sabor", "Momento"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 100,
    delaySpeed: 2500,
  });
  return (
    <div className="mainVideoCont">
      <video autoPlay muted loop className="videoCont">
        <source src={videoFondo} type="video/mp4" />
      </video>

      <div className="mainTituloCont">
        <h1 className="titulo" id="tituloScroll">
          Disfruta del mejor{" "}
          <span className="spanTyped">
            {text}
            <Cursor />
          </span>
        </h1>
        <p className="parrafoTitulo">
          Artesanal por excelencia, con sabor, textura y aroma único
        </p>

        <div className="ubicacionMain">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <img className="imgg" src={imgUno} alt="salsa helado" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgg" src={imgDos} alt="tachos de helado" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="imgg" src={imgTres} alt="palitos bombon helado" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MainComp;
