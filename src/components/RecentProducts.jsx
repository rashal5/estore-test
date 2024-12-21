import React from 'react';
import img1 from '../assets/9.jpg';
import img2 from '../assets/6.jpg';
import img3 from '../assets/8.jpg';
import img4 from '../assets/11.jpg';



const Recentproducts = () => {
  return (
    <div>
      <section className="py-10 px-10">
        <h2 className="text-3xl font-bold text-center mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
         
            <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img src={img1} alt="Product" className="w-full h-auto object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Product Title</h3>
                <p className="text-gray-600">Short product description goes here.</p>
                <p className="mt-2 text-lg font-bold text-green-500">$29.99</p>
                <button className="mt-4 w-full bg-orange-950 text-[#f1eeeb] py-2 rounded hover:bg-amber-700 transition duration-300">Add to Cart</button>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img src={img2} alt="Product" className="w-full h-auto object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Product Title</h3>
                <p className="text-gray-600">Short product description goes here.</p>
                <p className="mt-2 text-lg font-bold text-green-500">$29.99</p>
                <button className="mt-4 w-full bg-orange-950 text-[#f1eeeb] py-2 rounded hover:bg-amber-700 transition duration-300">Add to Cart</button>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img src={img3} alt="Product" className="w-full h-auto object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Product Title</h3>
                <p className="text-gray-600">Short product description goes here.</p>
                <p className="mt-2 text-lg font-bold text-green-500">$29.99</p>
                <button className="mt-4 w-full bg-orange-950 text-[#f1eeeb] py-2 rounded hover:bg-amber-700 transition duration-300">Add to Cart</button>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img src={img4} alt="Product" className="w-full h-auto object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Product Title</h3>
                <p className="text-gray-600">Short product description goes here.</p>
                <p className="mt-2 text-lg font-bold text-green-500">$29.99</p>
                <button className="mt-4 w-full bg-orange-950 text-[#f1eeeb] py-2 rounded hover:bg-amber-700 transition duration-300">Add to Cart</button>
              </div>
            </div>
       
        </div>
      </section>
    </div>
  );
};

export default Recentproducts;
