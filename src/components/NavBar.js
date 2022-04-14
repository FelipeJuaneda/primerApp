import React from "react";
import "./NavBar.css";
import logo from "./images/heladoLogo.png";

function HeaderComp() {
  return (
    <header className="header">
      <a href="index.html">
        <img
          className="logoImg"
          src={logo}
          alt="Logo de Helado para pagina de Heladeria"
        />
      </a>
      <ul className="listaDesordenada">
        <li>
          {" "}
          <a href="https://github.com/FelipeJuaneda">Inicio</a>{" "}
        </li>
        <li>
          <a href="https://github.com/FelipeJuaneda">Productos</a>
        </li>
        <li>
          <a href="https://github.com/FelipeJuaneda">Contacto</a>
        </li>
      </ul>
    </header>
  );
}
export default HeaderComp;