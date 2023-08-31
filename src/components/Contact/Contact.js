import React from "react";
import emailjs from "@emailjs/browser";
import imagenContacto from "../images/bombonHeladoCompania.jpg";
import swal from "sweetalert";
import "./Contact.css";

const Contact = () => {
  const enviarEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_78xjmag",
        "template_n78roj9",
        e.target,
        "1JzkXi6-G4sItE2vB"
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    swal({
      title: "Mensaje enviado!",
      text: `Nos contactaremos a la brevedad`,
      icon: "success",
    });
  };

  return (
    <div className="contenedorContacto">
      <div className="imagenContactoCont">
        <img
          className="imgContact"
          src={imagenContacto}
          alt="paletas bombon helado"
        />
      </div>
      <form className="formCont" onSubmit={enviarEmail}>
        <h2 className="tituloContacto">Contacta con Nosotros!</h2>
        <div className="nombreCont">
          <label>Nombre Completo</label>
          <input required type="text" name="user_name" />
        </div>
        <div className="apellidoCont">
          <label>Email</label>
          <input required type="email" name="user_email" />
        </div>
        <div className="mensajeCont">
          <label>Mensaje</label>
          <textarea required name="user_message" id="" />
        </div>
        <div>
          <button className="ctaContacto">
            <span className="hover-underline-animationContact"> Enviar! </span>
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
        </div>
      </form>
    </div>
  );
};

export default Contact;
