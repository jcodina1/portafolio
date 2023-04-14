import React from "react";
import "./Footer.css";
import Whatsapp from "../../assets/whatsapp_.png";
import Linkedin from "../../assets/linkedin_.png";
import Cv from "../../assets/curriculum_.png";
import Github from "../../assets/github_.png";
import { Link } from "react-router-dom";
import Hdv from "../../assets/CV_JuanCodina.pdf";

export default function Footer() {
  return (
    <div className="footer">
      <div className="imagenes">
        <div className="icono">
          <Link className="nav-link" to="https://wa.link/efq3u5">
            <img className="img_logo_footer" src={Whatsapp} alt="Whatsapp" />
             Whatsapp
          </Link>
        </div>
        <div className="icono">
          <Link className="nav-link" to="https://www.linkedin.com/in/jcodina1/">
            <img className="img_logo_footer" src={Linkedin} alt="Linkedin" />
            Linkedin
          </Link>
        </div>
        <div className="icono">
          <a className="nav-link" href={Hdv} download="Cv_JuanCodina.pdf">
            <img className="img_logo_footer" src={Cv} alt="Cv" />
            Cv
          </a>
        </div>
        <div className="icono">
          <Link className="nav-link" to="https://github.com/jcodina1/">
            <img className="img_logo_footer" src={Github} alt="Github" />
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
