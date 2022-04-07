import React from "react";
import './Header.css';

function HeaderComp(){
    return <header className="header">
        <span className="logo">LOGO</span>
        <ul className="listaDesordenada">
            <li> <a href="https://github.com/FelipeJuaneda">Inicio</a> </li>
            <li><a href="https://github.com/FelipeJuaneda">Peliculas</a></li>
            <li><a href="https://github.com/FelipeJuaneda">Series</a></li>
        </ul>
    </header>
};

export default HeaderComp;
