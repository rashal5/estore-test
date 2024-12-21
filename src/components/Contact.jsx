import React from 'react';

const Contact = () => {
  return (
    <div className="flex h-screen" id="contact-us">
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D)` }}
      ></div>

      <div className="flex items-center justify-center w-full lg:w-1/2 bg-[#f1eeeb] p-12">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            We're here to help and would love to hear from you. Whether you have a question about our products, need assistance with an order, or just want to share your feedback, our team is ready to assist.
          </p>

          <h5 className="text-xl font-semibold mt-8">Support</h5>
          <p className="text-gray-700">
            Instagram Support: <a href="#" className="text-blue-500 hover:underline">Click Here</a>
          </p>
          <p className="text-gray-700">
            WhatsApp Support: <a href="#" className="text-blue-500 hover:underline">Click Here</a>
          </p>

          <h5 className="text-xl font-semibold mt-8">Operating Hours</h5>
          <p className="text-gray-700">Monday to Saturday, 9:00 AM - 6:00 PM</p>

          <h5 className="text-xl font-semibold mt-8">Returns and Exchanges</h5>
          <p className="text-gray-700">
            For returns and exchanges, please visit our <a href="#" className="text-blue-500 hover:underline">Returns & Exchanges</a> page.
          </p>

          <p className="text-gray-700 mt-8">
            Thank you for choosing <span className="font-semibold">Sakura</span>. We’re looking forward to assisting you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
