import React from "react";
import Error404 from "../404/Error404";
import FormularioTestimonio from "../FormularioTestimonios/FormTesti";
import NavBar from "../NavBar/NavBar";

export default function Testimonios(){
    let testimonio=""
    function crearTestimonio() {
        const nombre = prompt("¿Cuál es tu nombre?");
        const empresa = prompt("¿En qué empresa trabajaste conmigo?");
        const proyecto = prompt("¿En qué proyecto trabajamos juntos?");
        const experiencia = prompt("¿Cómo describirías tu experiencia trabajando conmigo?");
        
         testimonio = `${nombre} de ${empresa} dice: "Trabajé con ${nombre} en el proyecto ${proyecto} y fue una experiencia increíble. ${experiencia}"`;
        
        return testimonio;
      }
    return(
        <>
        <NavBar />
        
        
        <FormularioTestimonio />

        </>
        )
}