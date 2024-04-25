import React from "react";
import "./description.css"; // Importa el archivo CSS para el componente Description

const Description = () => {
    return (
        <section id="description" className="description"> 
             <div className="container">
                <h1>Descubre tu hogar temporal</h1>
                <div className="cards">
                    <div className="card">
                        <h2>La casa es de alquiler completo.</h2>
                        <p>Fue construida en el 2006 y se encuentra en el pueblo de Golmayo (urbanización Las Camaretas), a 3 kilómetros del centro de la ciudad de Soria y a 5 kilómetros del paraje natural de Valonsadero.</p>
                    </div>
                    <div className="card">
                        <h2>Dispone de un estupendo jardín con barbacoa.</h2>
                        <p>En su planta baja consta de un espacioso salón-comedor con chimenea y televisión, amplia cocina totalmente equipada, una habitación doble, un baño completo y garaje.</p>
                    </div>
                    <div className="card">
                        <h2>En la primera planta encontramos 2 habitaciones de matrimonio.</h2>
                        <p>Esta dotada de calefacción y agua caliente en todas sus dependencias. También dispone de Wi-Fi en todo el alojamiento.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;
