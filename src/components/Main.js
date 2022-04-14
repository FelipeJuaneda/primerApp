import React from "react";
import "./Main.css";
import videoFondo from "./videos/heladoDerretido.mp4";

function MainComp(props) {
  return (
    <div className="mainVideoCont">
      <video autoPlay muted loop className="videoCont">
        <source src={videoFondo} type="video/mp4" />
      </video>
      <div className="mainTituloCont">
        <h1 className="titulo">
          Disfruta del mejor <span className="spanTyped">Helado</span>
        </h1>
        <p className="parrafoTitulo">
          Artesanal por excelencia, con sabor, textura y aroma{" "}
          <span>único</span>
        </p>
        <button onClick={props.alerta} className="cta">
          <span className="hover-underline-animation"> Descubrir Sabores </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
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
