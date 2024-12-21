import React from 'react';
import t1 from '../assets/25.png';
import t2 from '../assets/26.png';
import { Link } from 'react-router-dom';

const Products2 = () => {
  return (
    <div className="mt-5 container mx-auto px-4">
      <h1 className="text-center text-3xl font-bold mb-6">New Fashion Style</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 px-10">
        
        {/* Card 1 */}
        <div className="relative group">
          <img src={t2} alt="Elevate Your Style" className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-white mb-2">Unleash Elegance</h3>
            <p className="text-white mb-4">Chic and Timeless</p>
            <Link to="/products" className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">Shop Now</Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group">
          <img src={t1} alt="Fall into Fashion" className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-white mb-2">Redefine Your Wardrobe</h3>
            <p className="text-white mb-4">Exclusive and Modern</p>
            <Link to="/products" className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">Shop Now</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Products2;
