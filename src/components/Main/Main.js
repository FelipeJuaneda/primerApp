import React from "react";
import "./Main.css";
import videoFondo from "../videos/heladoDerretido.mp4";
import { Typewriter } from "react-simple-typewriter";

function MainComp(props) {
  return (
    <div className="mainVideoCont">
      <video autoPlay muted loop className="videoCont">
        <source src={videoFondo} type="video/mp4" />
      </video>

      <div className="mainTituloCont">
        <h1 className="titulo" id="tituloScroll">
          Disfruta del mejor{" "}
          <span className="spanTyped">
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2500}
              words={["Helado", "Sabor", "Momento"]}
            />
          </span>
        </h1>
        <p className="parrafoTitulo">
          Artesanal por excelencia, con sabor, textura y aroma único
        </p>

        <div className="ubicacionMain">
          <h2 className="ubicTitle">
            Ubicados en <span>Córdoba Capital</span>
          </h2>
          <p className="ubicParrafo">Nuestros locales:</p>
          <ul className="listaUbicaciones">
            <div>
              <div className="direcLogo">
                <i className="ri-map-pin-2-line"></i>
                <li>Belgrano 773</li>
              </div>
              <div className="direcLogo">
                <i className="ri-map-pin-2-line"></i>
                <li>Fructuoso Rivera 261</li>
              </div>
            </div>
            <div>
              <div className="direcLogo">
                <i className="ri-map-pin-2-line"></i>
                <li>Ambrosio Olmos 666</li>
              </div>
              <div className="direcLogo">
                <i className="ri-map-pin-2-line"></i>
                <li>Manuel Estrada 270</li>
              </div>
            </div>
          </ul>
        </div>

        <button className="cta">
          <span className="hover-underline-animation"> Descubrir Sabores </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            wsidth="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path className="flechita"
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MainComp;
