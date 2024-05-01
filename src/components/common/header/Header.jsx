import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {/* {nav.map((list, index) => (
              <li key={index}>
                <a href={list.path}>{list.text}</a>
              </li>
            ))} */}
            {/* Agregar enlace a Description */}
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="#description">Descripción</a>
            </li>
            <li>
              <a href="#opinions">Ubicación</a>
            </li>                <li>
              <a href="#contact">Contactar</a>
            </li>
          </ul>
        </div>
        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
