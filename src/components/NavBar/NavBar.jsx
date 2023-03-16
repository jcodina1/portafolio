import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logoDark.svg";
import "./NavBar.css"

 export default function NavBar(){
    return(
        <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand ><Link to={'/'}><img src={logo} width="150%" alt="Logo"  /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            
          </Nav>
          <Nav>
            <Nav.Link ><Link to={'/'}>Home</Link></Nav.Link>
            <Nav.Link href="#deets">Sobre Mi</Nav.Link>
            <Nav.Link href="#deets">Habilidades</Nav.Link>
            <Nav.Link href="#deets">Proyectos</Nav.Link>
            <Nav.Link href="#deets">Testimonios</Nav.Link>
            <Nav.Link href="#deets">Contacto</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
 }