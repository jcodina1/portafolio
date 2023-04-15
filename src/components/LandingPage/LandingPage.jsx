import React from "react";
import landingpage1 from "../../assets/header-img.svg";
import "./Landingpage.css";
import logo2 from "../../assets/logoDark2.svg";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


export default function LandingPage() {

  return (
    <div className="todo">
      <NavBar />
      <div className="hero">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={logo2} alt="" className="logo"/>
              <h1>Hola, soy Juan Camilo Codina </h1>
              <h2>
                Soy FullStack Developer te invito a conocer un poco de mis
                trabajos como desarrollador 
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link to={'/aboutMe'} className="btn-get-started scrollto">
                  Conóceme
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={landingpage1} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
