import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox.min.js";

const LightboxGallery = ({ images }) => {
  useEffect(() => {
    const lightbox = window.lightbox;

    // Log to check if lightbox object is available
    console.log("Lightbox object:", lightbox);

    // Ensure lightbox is available
    if (lightbox) {
      // Initialize lightbox with options
      lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        // Add more options as needed
      });
    } else {
      console.error("Lightbox not initialized properly.");
    }
  }, []);

  return (
    <div>
      <Container>
        {images.map((image, index) => (
          <a href={image.src} data-lightbox="gallery" key={index}>
            <img src={image.thumbnail} alt={image.alt} className="m-3" />
          </a>
        ))}
      </Container>
    </div>
  );
};

export default LightboxGallery;
