"use client"

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!isVisible && window.pageYOffset > 300) {
        setIsVisible(true);
      } else if (isVisible && window.pageYOffset <= 300) {
        setIsVisible(false);
      }
    };
  
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#782AFF',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '70px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
