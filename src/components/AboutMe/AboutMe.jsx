import React from "react";
import fotoPerfil from "../../assets/FOTOPERFIL.jpg";
import "./AboutMe.css";
import NavBar from "../NavBar/NavBar";

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <div className="aboutMe">
        <img src={fotoPerfil} alt="" />
        <div className="quien">
          <h1>Hi 👋, I'm Juan Codina</h1>
          <h3>¿Quién Soy?🤓</h3>
          <p>
            💎Desarrollador web Full Stack con gusto por el Front-end pero con
            la misma capacidad hacia el Back-end, con aspiraciones, deseos de
            superación, sueños y metas.
            <br />
          </p>
          <h3>¿Por que yo?🤔</h3>
          <p>
            💎Todo lo que hago lo hago basado en mis metas, cuento con la
            habilidad de acomodarme a diferentes situaciones o problemas con el
            fin de darle solución siempre procediendo con orden, paciencia y
            tolerancia.
            <br />
            💎Me caracteriza el alto sentido de compromiso, la disposición de
            aprender, escuchar, corregir y asumir de mis errores, me encuentro
            en constante aprendizaje de nuevos conocimientos que me sirvan para
            el desarrollo de mi vida profesional.
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
