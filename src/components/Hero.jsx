import React from 'react';
import HeroImage from './assets/images/LandingPage.jpg'

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-[90%]"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
    </div>
  );
};

export default Hero;
