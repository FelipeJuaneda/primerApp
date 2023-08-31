import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useCartContext } from "../../context/CartContext";
import "./Checkout.css";
import swal from "sweetalert";

const Checkout = () => {
  //useForm
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //llamo funciones de contexto del cart
  const { total, cart } = useCartContext();
  console.log(cart);
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
      cart: cart,
      total: total,
    };
    console.log(cartToSave);

    //envio a FireStore la cart e imprimo mensaje success
    const db = getFirestore();
    const cartCollection = collection(db, "cart");
    addDoc(cartCollection, cartToSave).then((response) =>
      swal({
        title: "Pedido Tomado!",
        text: `Muchas gracias ${data.nombre} por su compra! \n Se ha enviado a su Email: ${data.email} el ticket con la orden de su compra "${response.id}" `,
        icon: "success",
      })
    );
  };

  return (
    <div className="checkoutContainer">
      <div className="formularioResumenCont">
        <form className="formularioCheckout" onSubmit={handleSubmit(saveData)}>
          <h2>Datos de Envio</h2>
          <div className="nombreApellido">
            <div className="contNombre">
              <input
                className="nombreInput"
                type={"text"}
                placeholder="Nombre"
                {...register("nombre", {
                  required: true,
                })}
              />
              {errors.nombre?.type === "required" && (
                <p className="nombreReq">Nombre requerido!</p>
              )}
            </div>
            <div className="contApellido">
              <input
                className="apellidoInput"
                type={"text"}
                placeholder="Apellido"
                {...register("apellido", {
                  required: true,
                })}
              />
              {errors.apellido?.type === "required" && (
                <p className="apellidoReq">Apellido requerido!</p>
              )}
            </div>
          </div>
          <div className="emailCont">
            <input
              className="emailInput"
              type={"text"}
              placeholder="Email"
              {...register("email", {
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email?.type === "pattern" && (
              <p className="emailReq">Formato de Email incorrecto!</p>
            )}
          </div>
          <div className="numeroDireccion">
            <div className="numeroCont">
              <input
                className="numeroInput"
                type={"number"}
                placeholder="Numero de telefono"
                {...register("telefono", {
                  required: true,
                })}
              />
            </div>
            <div className="direcCont">
              <input
                className="direcInput"
                type={"text"}
                placeholder="Direccion"
                {...register("direccion", {
                  required: true,
                })}
              />
            </div>
          </div>

          <button className="ctaCkeckout" type={"submit"}>
            <span className="hover-underline-animationCheckout"> Enviar! </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </form>

        <div className="resumenInfo">
          <span className="tituloResumen">Resumen</span>
          {cart.map((it) => {
            return (
              <div key={it.id} className="nombreCantidad">
                <p>
                  <span className="nombreResumen">
                    {it.nombre} X{it.quantity}
                  </span>
                </p>
                <p>Subtotal: {it.precio * it.quantity}$</p>
              </div>
            );
          })}
          <p className="totalContResumen">
            <span className="totalResumen">Total:</span> {total}$
          </p>
        </div>
      </div>

      <div className="contenedorImgCheck"></div>
    </div>
  );
};

export default Checkout;
