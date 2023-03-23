import React from "react";
import Error404 from "../404/Error404.jsx";
import CardProyetos from "../CardProyetos/CardProyetos.jsx";
import {proyectos} from "../../data.js"
import NavBar from "../NavBar/NavBar.jsx";
import "./Proyectos.css";

export default function Proyectos(){
    
    return(
        <>
         <NavBar />
            <h1>PROYECTOS</h1>
         <div className="cont">
        {proyectos.map((p,index)=><CardProyetos key={index} titulo={p.titulo} img={p.img} des={p.des}/>)}
        {proyectos.map((p,index)=><CardProyetos key={index} titulo={p.titulo} img={p.img} des={p.des}/>)}
         </div>
        </>
        )
}