import React from "react";
import './Header.css';


function HeaderComp(){
    return <header className="header">
        <span className="logo">LOGO</span>
        <ul className="listaDesordenada">
            <li> <a href="https://github.com/FelipeJuaneda">Inicio</a> </li>
            <li><a href="https://github.com/FelipeJuaneda">Productos</a></li>
            <li><a href="https://github.com/FelipeJuaneda">Contacto</a></li>
        </ul>
    </header>
};

export default HeaderComp;
