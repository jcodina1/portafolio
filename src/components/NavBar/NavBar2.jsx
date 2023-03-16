import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logoDark.svg";
import "./NavBar.css"
 export default function NavBar2(){
    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand ><Link to={'/'}><img src={logo} width="150%" alt="Logo"  /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            
          </Nav>
          <Nav>
            
            <Nav.Link ><Link className="link" to={'/aboutMe'}>Sobre Mi</Link></Nav.Link>
            <Nav.Link ><Link className="link" to={'/habilidades'}>Habilidades</Link></Nav.Link>
            <Nav.Link ><Link className="link" to={'/proyectos'}>Proyectos</Link></Nav.Link>
            <Nav.Link ><Link className="link" to={'/testimonios'}>Testimonios</Link></Nav.Link>
            <Nav.Link ><Link className="link" to={'/contacto|'}>Contacto</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
 }