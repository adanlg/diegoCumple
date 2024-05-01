import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa"; // Import email icon
import "./contact.css";
import Heading from "../../common/Heading";

const Contact = () => {
    const phoneNumber = "34697369647";
    const emailAddress = "casarurallacarrasquilla@gmail.com"; // Define the email address you want to use
  
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber}`);
    };

    const handleEmailClick = () => {
        window.open(`mailto:${emailAddress}`); // Opens the default mail client
    };
  
    return (
        <div className="contact" id="contact" style={{paddingBottom: "50px"}}>
            <div className='container'>
                <Heading 
                    title='Contactar'
                    subtitle={(
                        <>
                            Contacte con nosotros sin ningún compromiso:{" "}
                            {/* <span style={{fontWeight: "bold"}}>+34 {phoneNumber} / {emailAddress}</span> */}
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
                <button className="email" onClick={handleEmailClick}>
                    <FaEnvelope /> Escribir un correo
                </button>
            </div>


        </div>
    );
};

export default Contact;

