import React, { useState } from "react";

import NavBar from "../NavBar/NavBar";


import "./Habilidades.css";

import {lenguajes,frontEnd,backEnd} from "../../data.js"
import Modals from "../Modal/Modal";
import Acordion from "../Acordion/Acordion";
import Slider from "../Slider/Slider";
export default function Habilidades() {
  
  const habilidades = lenguajes
    .concat(frontEnd)
    .concat(backEnd)
    .sort(() => Math.random() - 0.5);
  const total = habilidades.concat(habilidades);
  const [show, setShow] = useState(false);
    const [unclick, setUnclick] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      if (!unclick) {
        setShow(true);
        setUnclick(true);
      }
    };
  return (
    <div className="habilidades">
      <Modals show={show} handleClose={handleClose}  />
      <NavBar />
      <h1>Habilidades y conocimientos</h1>
      <div className="h">
        <Slider total={total} lenguajes={lenguajes} frontEnd={frontEnd} backEnd={backEnd} />
        <Acordion handleShow={handleShow} lenguajes={lenguajes} frontEnd={frontEnd} backEnd={backEnd}  />        
      </div>
    </div>
  );
}
