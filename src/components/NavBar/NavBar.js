import React, { useState } from "react";
import logo from "../images/heladoLogo.png";
import menuBurgerIcono from "../images/menuBurger.png";
import "remixicon/fonts/remixicon.css";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function HeaderComp(props) {
  //FUNCION CAMBIO DE COLOR EN SCROLL NAVEGADOR
  const [header, setHeader] = useState(false);
  const cambioBackgroundHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", cambioBackgroundHeader);

  //FUNCION CLICK PARA MENU BURGER
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className={header ? "header scrollActivo" : "header"}>
      <nav className="navegador">
        {/* LOGO */}
        <Link className="linkLogo" to="/">
          <img
            className="logoImg"
            src={logo}
            alt="Logo de Helado para pagina de Heladeria"
          />
        </Link>

        {/* MENU BURGER */}
        <div className="contenedorBurger" onClick={handleClick}>
          <img
            className="iconoBurger"
            src={menuBurgerIcono}
            alt="Menu Hamburguesa"
          />
        </div>

        {/* LISTA DESORDENADA */}
        <ul
          className={`listaDesordenada ${clicked ? "toggleBurger" : ""}`}
          id="lista"
        >
          <li>
            <NavLink onClick={handleClick} to={"/"} className="link">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to={"/"} className="link">
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to={"/contacto"} className="link">
              Contacto
            </NavLink>
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
        <NavLink className="linkCarrito" to={"/cart"}>
          <CartWidget />
        </NavLink>
      </nav>
    </header>
  );
}
export default HeaderComp;
