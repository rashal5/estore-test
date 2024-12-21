import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#130e0c] text-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>
              <h5 className="text-xl font-semibold text-white mb-4">About Us</h5>
              <p className="text-white">
                 At Sakura, we are dedicated to offering high-quality clothing and accessories designed to elevate your confidence and showcase your unique style.
              </p>
            </div>

            <div>
              <h5 className="text-xl font-semibold text-white mb-4">Quick Links</h5>
              <ul>
                <li className="mb-2">
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li className="mb-2">
                  <a href="/products" className="hover:underline">Products</a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="hover:underline">About</a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-semibold text-white mb-4">Contact Us</h5>
              <p>Email: <a href="mailto:info@sakura.com" className="hover:underline">info@sakura.com</a></p>
              <p>Phone: <a href="tel:+123456789" className="hover:underline">+1 234 567 89</a></p>
            </div>
          </div>

          <div className="text-center mt-8">
            <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>&copy; 2024 Sakura. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer