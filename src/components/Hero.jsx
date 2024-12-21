import React from 'react';
import home from '../assets/x.jpg';
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      
      <div className="flex flex-col lg:pl-[30rem] absolute items-center overflow-hidden justify-center w-full h-full text-center px-4">

        <p className="text-[#130e0c] font-bold text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
          Embrace every season 
          <span className="block sm:flex"> with our curated collection.</span>
        </p>
        
        <Link to="/signin" className="mt-6 px-6 py-3 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-orange-950 text-[#f1eeeb] rounded-full text-sm sm:text-base md:text-lg hover:bg-white hover:text-orange-950 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-[#8B4513]">
          Get Started
        </Link>

      </div>

      <img
        src={home}
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
