import React from 'react';
import LightboxGallery from './LightboxGallery'; // Assuming LightboxGallery component is in a separate file
import 'lightbox2/dist/css/lightbox.min.css'; // Import CSS first
import 'lightbox2/dist/js/lightbox.min.js'; // Then import JavaScript

const Project = () => {
    const images = [
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 1' },
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 2' },
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 3' },
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 4' },
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 5' },
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 6' },
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 7' },
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 8' },
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 9' },
        { src: 'https://picsum.photos/600', thumbnail: 'https://picsum.photos/200', alt: 'Image 10' },

        // Add more images as needed
      ];
    
  return (
    <div>
      <h1>Our Projects</h1>
      <LightboxGallery images={images} />
    </div>
  );
};
export default Project;
