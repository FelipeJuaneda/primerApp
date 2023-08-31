import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";
const Categories = () => {
  return (
    <div className="categoriasCont">
      <div className="tituloCategorias">Categorias</div>
      <div className="categoriaItems">
        <NavLink
          activeclassname="categoriaActiva"
          className={"itemCat"}
          to={"/items/palito"}
        >
          Palitos
        </NavLink>
        <NavLink
          activeclassname="categoriaActiva"
          className={"itemCat"}
          to={"/items/torta"}
        >
          Tortas Heladas
        </NavLink>
        <NavLink
          activeclassname="categoriaActiva"
          className={"itemCat"}
          to={"/items/alfajor"}
        >
          Alfajores
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;
