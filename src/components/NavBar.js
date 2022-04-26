import React from "react";
import "./styles/NavBar.css";
import logo from "./images/heladoLogo.png";
import menuBurgerIcono from "./images/menuBurger.png";
import "remixicon/fonts/remixicon.css";
import CartWidget from "./CartWidget";

function HeaderComp(props) {
  const efectoScroll = () => {
    let header = document.getElementsByClassName("header")[0];
    if (window.scrollY >= 50) {
      header.style.background = "var(--color-verdeTransparente)";
    } else {
      header.style.background = "transparent";
    }
  };
  window.addEventListener("scroll", efectoScroll);
  return (
    <header className="header">
      <nav className="navegador">
        {/* LOGO */}
        <a className="linkLogo" href="index.html">
          <img
            className="logoImg"
            src={logo}
            alt="Logo de Helado para pagina de Heladeria"
          />
        </a>
        {/* MENU BURGER */}
        <div className="contenedorBurger" onClick={props.menuBurger}>
          <img
            className="iconoBurger"
            src={menuBurgerIcono}
            alt="Menu Hamburguesa"
          />
        </div>
        {/* LISTA DESORDENADA */}
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
        {/* LOGO CARRITO */}
        <CartWidget />
      </nav>
    </header>
  );
}
export default HeaderComp;
