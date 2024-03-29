import React from "react";
import ImageSlider from "./ImageSlider";

const HeroSection = () => {
  const images = [
    "https://images.bannerbear.com/direct/EjJywNMlJm5zmerB8a/requests/000/033/000/213/0Mn5r3E1XY0gmWDZQWPoD9kg7/9e42168a169264bb575a5ec10acd1c8942967845.jpg",
    "https://source.unsplash.com/1000x400/?computer",
    "https://source.unsplash.com/1000x400/?nature",

    // Add more image URLs as needed
  ];

  return <ImageSlider images={images} />;
};

export default HeroSection;
