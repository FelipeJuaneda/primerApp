import React from "react";
import SaboresList from "./SaboresList";
import "./Sabores.css"

const SaboresContainer = ({saboresElegidos, limiteSabor}) => {

  return (
    <div  className="saboresContainer">
      <SaboresList saboresElegidos={saboresElegidos} limiteSabor={limiteSabor} />
    </div>
  );
};

export default SaboresContainer;
