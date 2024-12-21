import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const[productData, setProductData]= useState([]);

  //Fetch products from the backend
  useEffect(()=>{
    const fetchProducts = async()=>{
      try{
        const response = await axios.get('http://localhost:3000/');
        setProductData(response.data);
      }catch(error){
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  console.log(productData)
  return (
    <div>
      <section className="py-10 px-10">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
         {productData.map((x)=>(
            <div key={x._id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img src={`http://localhost:3000/${x.imageUrl}`} alt="Product" className="w-full h-auto object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{x.name}</h3>
                <p className="text-gray-600">{x.description}</p>
                <p className="mt-2 text-lg font-bold text-green-500">${x.price}</p>
                <button className="mt-4 w-full bg-orange-950 text-[#f1eeeb] py-2 rounded hover:bg-amber-700 transition duration-300">Add to Cart</button>
              </div>
            </div>
          ))}
       
        </div>
      </section>
    </div>
  );
};

export default Products;
