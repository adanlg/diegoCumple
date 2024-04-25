import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa"; // Importa los iconos de WhatsApp y teléfono
import "./contact.css"; // Importa el archivo CSS para el componente Contact
import Heading from "../../common/Heading";

const Contact = () => {
    const phoneNumber = "697369647"; // Aquí coloca el número de teléfono que desees
  
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, "_blank"); // Abre WhatsApp en una nueva pestaña
    };

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber}`); // Inicia la llamada telefónica
    };
  
    return (
        <div className="contact" id="contact" style={{paddingBottom: "50px"}}> {/* Aplica la clase contact al contenedor principal */}
            <div className='container'>
                <Heading 
                    title='Contactar' 
                    subtitle={(
                        <>
                            Llama o escribe un WhatsApp a este número sin ningún compromiso:{" "}
                            <span style={{fontWeight: "bold"}}>+34 {phoneNumber}</span>
                        </>
                    )}
                />
            </div>
            <div className="buttons">
                <button className="whatsapp" onClick={handleWhatsAppClick}>
                    <FaWhatsapp /> Abrir WhatsApp
                </button>
                <button className="call" onClick={handleCallClick}>
                    <FaPhone /> Llamar
                </button>
            </div>

            {/* Agrega el mapa de Google Maps */}
            {/* <div className="map-container">
                <iframe
                    title="Google Map"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=41.765703309470,-2.523532335968`}
                    allowFullScreen
                ></iframe>
            </div> */}
        </div>
    );
};

export default Contact;
