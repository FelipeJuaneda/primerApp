import React from "react";
import SaboresList from "./SaboresList";
import "./Sabores.css"

const SaboresContainer = ({saboresElegidos}) => {

  return (
    <div  className="saboresContainer">
      <SaboresList saboresElegidos={saboresElegidos} />
    </div>
  );
};

export default SaboresContainer;
