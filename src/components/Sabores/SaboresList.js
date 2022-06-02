import React, { useEffect, useState } from "react";
import { getSaboresData } from "../../data/getSabores";
import "./Sabores.css";

const SaboresList = ({ saboresElegidos, limiteSabor }) => {
  const [sabores, setSabores] = useState([]);
  const [marcado, setMarcado] = useState(false);

  useEffect(() => {
    getSaboresData(setSabores);
  }, []);

  const funcionAgregarSabor = (id) => {
    //busca sabores
    const findSabor = sabores.find((sabor) => sabor.id === id);

    //si la cantidad de sabores llega al limite deja de agregar
    if (saboresElegidos.length >= limiteSabor) {
      alert("Limite de sabores superado");
      return;
    }

    //si en el array de saboresElegidos esta duplicadop el sabor:
    if (saboresElegidos.includes(findSabor)) {
      alert("sabor ya elegido");
      return;
    }
    if (!findSabor) {
      alert("Error!!");
      return;
    }

    //pusheo sabores en el array
    saboresElegidos.push(findSabor);
    console.log(saboresElegidos);
    setMarcado(!marcado);
  };

  //filtro por tipo crema o agua
  const findTipoCrema = sabores.filter((sabor) => sabor.tipo === "crema");
  const findTipoAgua = sabores.filter((sabor) => sabor.tipo === "agua");

  return (
    <>
      <div className="saboresCrema">
        <h2>Crema</h2>
        {findTipoCrema.map((sabor) => {
          return (
            <div onClick={() => funcionAgregarSabor(sabor.id)} key={sabor.id}>
              <p>{sabor.nombre}</p>
            </div>
          );
        })}
      </div>
      <div className="saboresAgua">
        <h2>Agua</h2>
        {findTipoAgua.map((sabor) => {
          return (
            <div onClick={() => funcionAgregarSabor(sabor.id)} key={sabor.id}>
              <p>{sabor.nombre}</p>
            </div>
          );
        })}
      </div>

      {/* {saborList.map((s)=><p key={s.identificador}>{s.nombre}</p>)}  */}
    </>
  );
};
export default SaboresList;
