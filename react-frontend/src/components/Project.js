import React from 'react';
import LightboxGallery from './LightboxGallery'; 
import { Container } from "react-bootstrap";



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
    <div id='projects' className='my-5' >

      <h1 className='my-5'>Our Projects</h1>
      <LightboxGallery images={images} />
    </div>
  );
};
export default Project;
