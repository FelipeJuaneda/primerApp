import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { getSaboresData } from "../../data/getSabores";
import "./Sabores.css";

const SaboresList = ({ saboresElegidos, limiteSabor }) => {
  //seteo sabores desde data sabores a este array
  const [sabores, setSabores] = useState([]);
  useEffect(() => {
    getSaboresData(setSabores);
  }, []);
  //array para mostrar los sabores seleccionados
  const [saborElegido, setSaborElegido] = useState([]);

  const funcionAgregarSabor = (id) => {
    //busca sabores
    const findSabor = sabores.find((sabor) => sabor.id === id);
    //si la cantidad de sabores llega al limite deja de agregar
    if (saborElegido.length >= limiteSabor) {
      swal({
        title: "Limite de sabores Alcanzado!",
        text: `Puedes agregar hasta ${limiteSabor} sabores`,
        icon: "warning",
        timer: "3400",
      });
      return;
    }
    //si en el array de saboresElegidos esta duplicadop el sabor:
    if (saborElegido.includes(findSabor)) {
      swal({
        title: "Sabor ya elegido!",
        icon: "warning",
        timer: "3000",
      });
      return;
    }
    if (!findSabor) {
      alert("Error!!");
      return;
    }
    //pusheo sabores en el array
    setSaborElegido([...saborElegido, findSabor]);
    saboresElegidos.push(findSabor);
  };

  const funcionEliminarSabor = (id) => {
    //busca sabor
    const findSabor = sabores.find((sabor) => sabor.id === id);
    //filtra sabor clickeado y actualiza el array
    const newSabores = saborElegido.filter((sabb) => sabb.id !== id);
    setSaborElegido(newSabores);
    //busca la posicion del sabor y lo elimina del array de firebase
    const posi = saboresElegidos.indexOf(findSabor);
    saboresElegidos.splice(posi, 1);
  };

  //filtro por tipo crema o agua
  const findTipoCrema = sabores.filter((sabor) => sabor.tipo === "crema");
  const findTipoAgua = sabores.filter((sabor) => sabor.tipo === "agua");

  return (
    <>
      <div className="saboresCrema">
        <h2 className="tituloCrema">Crema</h2>
        {findTipoCrema.map((sabor) => {
          return (
            <div
              className="listaCrema"
              onClick={() => funcionAgregarSabor(sabor.id)}
              key={sabor.id}
            >
              <p>{sabor.nombre}</p>
            </div>
          );
        })}
      </div>
      <div className="saboresAgua">
        <h2 className="tituloAgua">Agua</h2>
        {findTipoAgua.map((sabor) => {
          return (
            <div
              className="listaAgua"
              onClick={() => funcionAgregarSabor(sabor.id)}
              key={sabor.id}
            >
              <p>{sabor.nombre}</p>
            </div>
          );
        })}
      </div>

      <div className="saboresElegidosCont">
        <p className="tituloSaboresEleg">
          Sabores Elegidos!
          <br />
          <i className="ri-arrow-down-line"></i>
        </p>
        {saborElegido.map((sab) => (
          <div className="listaSaboresCont" key={sab.id}>
            <li className="listaSaboresElegidos" key={sab.id}>
              {sab.nombre}{" "}
              <span
                className="cruzSabores"
                onClick={() => funcionEliminarSabor(sab.id)}
              >
                X
              </span>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};
export default SaboresList;
