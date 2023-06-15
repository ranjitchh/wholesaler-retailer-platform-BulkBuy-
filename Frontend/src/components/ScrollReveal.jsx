"use client"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent = ({ children, duration, delay, distance, easing, origin, scale, viewFactor }) => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.scroll-reveal', {
      duration: duration || 1000,
      delay: delay || 200,
      distance: distance || '30px',
      easing: easing || 'ease-in-out',
      origin: origin || 'bottom',
      reset: true,
      scale: scale || 1,
      viewFactor: viewFactor || 0.2,
    });
  }, []);

  return <div className="scroll-reveal">{children}</div>;
};

export default ScrollRevealComponent;
