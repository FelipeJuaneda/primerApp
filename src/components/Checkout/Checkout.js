import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useCartContext } from "../context/CartContext";
import "./Checkout.css"

const Checkout = () => {
  //useForm
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //llamo funciones de contexto del cart
  const { total, cart } = useCartContext();

  //funcion onChange para mandar los datos a firebase
  const saveData = (data) => {
    //carta sin info irrelevante
    const cartResumida = cart.map(
      ({ id, nombre, quantity, precio, saboresElegidos }) => ({
        id,
        nombre,
        quantity,
        precio,
        saboresElegidos,
      })
    );
    //usuarios
    const user = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      direccion: data.direccion,
    };
    //carta a mandar
    const cartToSave = {
      user: user,
      cart: cartResumida,
      total: total,
    };
    console.log(cartToSave);

    const db = getFirestore();
    const cartCollection = collection(db, "cart");
    addDoc(cartCollection, cartToSave).then((response) =>
      console.log(response.id)
    );
  };

  return (
    <div>
      <h2>Datos de Envio</h2>
      <form onSubmit={handleSubmit(saveData)}>
        <div>
          <input
            type={"text"}
            placeholder="Nombre"
            {...register("nombre", {
              required: true,
            })}
          />
          {errors.nombre?.type === "required" && <p>Nombre rquerido!</p>}
        </div>
        <div>
          <input
            type={"text"}
            placeholder="Apellido"
            {...register("apellido", {
              required: true,
            })}
          />
          {errors.apellido?.type === "required" && <p>Apellido rquerido!</p>}
        </div>
        <div>
          <input
            type={"text"}
            placeholder="Email"
            {...register("email", {
              pattern:
                /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>Formato de Email incorrecto!</p>
          )}
        </div>
        <div>
          <input
            type={"number"}
            placeholder="Numero de telefono"
            {...register("telefono", {
              required: true,
            })}
          />
        </div>
        <div>
          <input
            type={"text"}
            placeholder="Direccion"
            {...register("direccion", {
              required: true,
            })}
          />
        </div>

        <input type={"submit"} value="Enviar" />
      </form>
    </div>
  );
};

export default Checkout;
