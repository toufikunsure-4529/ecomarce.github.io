import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  setInterval(() => {
    nextImage();
  }, 5000);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slider ${index}`}
          className={`absolute top-0 left-0 w-full h-full ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 ease-in-out`}
        />
      ))}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
        Prev
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
