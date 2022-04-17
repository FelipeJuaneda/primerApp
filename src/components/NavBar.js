import React from "react";
import "./NavBar.css";
import logo from "./images/heladoLogo.png";
import menuBurgerIcono from "./images/menuBurger.png";
import "remixicon/fonts/remixicon.css";

function HeaderComp(props) {
  return (
    <header className="header">
      <nav className="navegador">
        <a href="index.html">
          <img
            className="logoImg"
            src={logo}
            alt="Logo de Helado para pagina de Heladeria"
          />
        </a>

        <div className="contenedorBurger" onClick={props.menuBurger}>
          <img
            className="iconoBurger"
            src={menuBurgerIcono}
            alt="Menu Hamburguesa"
          />
        </div>

        <ul className="listaDesordenada" id="lista">
          <li>
            <a href="https://github.com/FelipeJuaneda">Inicio</a>
          </li>
          <li>
            <a href="https://github.com/FelipeJuaneda">Productos</a>
          </li>
          <li>
            <a href="https://github.com/FelipeJuaneda">Contacto</a>
          </li>

          <div className="redesNav">
            <a href="https://www.instagram.com/felipejuaneda/">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://web.whatsapp.com/">
              <i className="ri-whatsapp-line"></i>
            </a>
            <a href="https://www.facebook.com/felipe.juaneda">
              <i className="ri-facebook-circle-line"></i>
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}
export default HeaderComp;