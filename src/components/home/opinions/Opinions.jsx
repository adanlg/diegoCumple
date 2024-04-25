import React from "react";
import "./opinions.css";
import "./styles.css";
import Review from "./Review";

const Opinions = () => {
  const rating = 9.2; // Valor del rating
  const radius = 50; // Radio del círculo
  const circumference = 2 * Math.PI * radius; // Circunferencia del círculo

  // Calculamos la longitud del arco del círculo basado en el rating
  const circleStrokeDasharray = `${circumference} ${circumference}`;
  const circleStrokeDashoffset = circumference - (rating / 10) * circumference;

  return (
    <section id="opinions" className="opinions padding"> {/* Add id to the section */}
      <div className="container">
        <div className="title">
          <img
            src="/4.75-stars.png" // Ruta relativa a la carpeta public
            alt="4.75 stars"
            className="stars-image"
          />
          <div className="rating-circle">
            <svg className="circle-svg" width="120" height="120">
              <circle
                className="circle-background"
                cx="60"
                cy="60"
                r={radius}
              />
              <circle
                className="circle-fill"
                cx="60"
                cy="60"
                r={radius}
                style={{
                  strokeDasharray: circleStrokeDasharray,
                  strokeDashoffset: circleStrokeDashoffset,
                }}
              />
              <text x="60" y="75" textAnchor="middle" className="rating" fill="#27ae60">
                {rating}
              </text>
            </svg>
          </div>
        </div>
        <Review />
      </div>
    </section>
  );
};

export default Opinions;
