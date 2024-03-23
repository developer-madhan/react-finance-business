import React, { useState, useEffect } from 'react';
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px',
    cursor: 'pointer',
    fontSize: '25px',
    transition: 'opacity 0.3s, visibility 0.3s, transform 0.3s',
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
  };
  console.log("sroll button");

  return (
    <button 
      style={buttonStyle} 
      onClick={scrollToTop} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}

    >
      <TbArrowBigUpLinesFilled />
    </button>
  );
};

export default ScrollToTopButton;
