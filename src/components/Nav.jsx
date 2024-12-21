import React from 'react'
import logo from '../assets/asw.png';
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
          <nav className="bg-[#f1eeeb] text-[#130e0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold">
                  <img src={logo} alt='logo' width={130} height={29}/>
                </Link>
              </div>
        
              <div className="flex sm:hidden">
                <button id="menu-button" className="inline-flex items-center justify-center p-2 rounded-md text-[#130e0c] hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokelinecapjoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
        
      
              <div className="hidden sm:flex sm:space-x-4">
                <Link to="/" className="hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/products" className="hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                <Link to="/about" className="hover:bg-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="hover:bg-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <a href="#signup" className="hover:bg-white bg-orange-950 text-white px-4 py-2 rounded-md text-sm font-medium hover:text-orange-950">Sign In</a>
              </div>
            </div>
          </div>
        
      
          {/* <div id="mobile-menu" className="hidden sm:hidden">
            <Link to="/" className="block px-4 py-2 text-sm text-[#130e0c] hover:bg-gray-700 hover:text-white">Home</Link>
            <Link to="/products" className="block px-4 py-2 text-sm text-[#130e0c] hover:bg-gray-700 hover:text-white">Products</Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-[#130e0c] hover:bg-gray-700 hover:text-white">About</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm text-[#130e0c] hover:bg-gray-700 hover:text-white">Contact</Link>
          </div> */}
        </nav>
  )
}

export default Nav