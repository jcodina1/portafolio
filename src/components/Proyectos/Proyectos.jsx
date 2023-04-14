import React from "react";

import CardProyetos from "../CardProyetos/CardProyetos.jsx";
import {proyectos} from "../../data.js"
import NavBar from "../NavBar/NavBar.jsx";
import "./Proyectos.css";
import Footer from "../Footer/Footer.jsx";

export default function Proyectos(){
    
    return(
        <>
         <NavBar />
            <h1>PROYECTOS</h1>
         <div className="cont">
        {proyectos.map((p,index)=><CardProyetos key={index} titulo={p.titulo} img={p.img} des={p.des} url={p.url} descripcion={p.descripcion} />)}
        
         </div>
         <Footer />
        </>
        )
}