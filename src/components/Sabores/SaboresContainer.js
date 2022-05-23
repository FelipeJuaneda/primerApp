import React from "react";
import SaboresList from "./SaboresList";

const SaboresContainer = ({saboresElegidos}) => {

  return (
    <div>
      <SaboresList saboresElegidos={saboresElegidos} />
    </div>
  );
};

export default SaboresContainer;
