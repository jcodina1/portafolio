import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logoDark.svg";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img src={logo} width="150%" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className="nav-link" to={"/aboutMe"}>Sobre Mi</Link>
            <Link className="nav-link" to={"/habilidades"}>Habilidades</Link>
            <Link className="nav-link" to={"/proyectos"}>Proyectos</Link>
            <Link className="nav-link" to={"/testimonios"}>Testimonios</Link>
            <Link className="nav-link" to={"/contacto"}>Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
