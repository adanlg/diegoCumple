import React from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";
import "./awards.css";

const Awards = () => {
  return (
    <>
      <section className="awards padding" id="awards">
        <div className="container">
          <Heading
            title="Más de 200+ carrasquilleros han confiado en nosotros"
            subtitle="Únete a la mejor experiencia"
          />

          <div className="content grid4 mtop centered"> {/* Agrega la clase "centered" */}
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
