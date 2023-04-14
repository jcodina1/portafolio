import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import "./FormularioContacto.css";
 


export default function FormularioContacto() {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setInput((estado) => {
      console.log(estado);
      return {
        ...estado,
        [e.target.name]: e.target.value,
      };
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(errors);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_o3kj0bj", "template_bhxdboc", form.current, "vVOn065yo-X3s5seo")
      .then((result) => {
          console.log(result.text);
          alert("Enviado")
      }, (error) => {
          console.log(error.text);
          alert("No Se pudo enviar por favor inteneta mas tarde")
      });
  };

  return (
    <div className="cardb">
      <div className="card__headerb">
        <h3>Contacto</h3>
      </div>
      <div className="card__bodyb">
        <form className="form" ref={form} onSubmit={sendEmail}>
          {errors && errors.user_name && <p className="danger">{errors.user_name}</p>}
          <div className="two"></div>
          <div className="inputLabel">
            <label className="label">Nombre:</label>
            <input
              className="input"
              type="text"
              name="user_name"
              placeholder="Nombre completo"
              value={input.user_name}
              onChange={(e) => handleInputChange(e)}
            />
            
          </div>
          <div className="inputLabel">
            <label className="label">Email:</label>
            {errors && errors.user_email && <p className="danger">{errors.user_email}</p>}
            <input
              className="input"
              name="user_email"
              type="email"
              placeholder="ejemplo@email.com"
              value={input.user_email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="inputLabel">
            <label className="label">Mensaje:</label>
            {errors && errors.message && (
              <p className="danger">{errors.message}</p>
            )}
            <textarea
              className="input"
              name="message"
              placeholder="Danos tu mensaje"
              value={input.message}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <input
            className="submit"
            name="submit"
            type="submit"
            value="Send"
            disabled={Object.keys(errors).length === 0 ? false : true}
          />
        </form>
      </div>
    </div>
  );
}

export function validate(input) {
  let errors = {};
  if (!input.user_email) {
    errors.user_email = "E-mail es requerido";
  } else if (!/\S+@\S+\.\S+/.test(input.user_email)) {
    errors.user_email = "E-mail es invalido";
  }
  if (!input.user_name) {
    errors.user_name = "Nombre es requerido";
  }
  if (!input.message) {
    errors.message = "Recuerda escribir el mensaje";
  }

  return errors;
}
