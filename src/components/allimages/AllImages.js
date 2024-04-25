import React, { useState } from 'react';
import imagesList from './imageList'; // Importa la lista de imágenes
import './AllImages.css'; // Importa el archivo de estilos CSS para el componente

const AllImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para mantener el índice de la imagen actual

  const goToNextImage = () => {
    // Incrementa el índice de la imagen actual
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
  };

  const goToPreviousImage = () => {
    // Decrementa el índice de la imagen actual
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagesList.length - 1 : prevIndex - 1));
  };

  const goToMainPage = () => {
    // Redirige a la ruta principal
    window.location.href = '/';
  };

  return (
    <div className="all-images">
      <button onClick={goToMainPage} className="close-button">x</button> {/* Botón de la cruz */}
      <div className="image-container">
        <img src={imagesList[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="image" />
        <div className="button-container">
          <button onClick={goToPreviousImage} className="button">Anterior</button>
          <button onClick={goToNextImage} className="button">Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default AllImages;
