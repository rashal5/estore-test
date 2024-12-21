import React from 'react';
import img from '../assets/9.jpg';

const Signin = () => {
  return (
    <div className="flex h-screen" id='signup'>

      <div
        className="hidden lg:block w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="flex items-center justify-center w-full lg:w-1/2 bg-[#f1eeeb] p-12">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>
          <form>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className="mb-6">
              <button
                className="bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                aria-label="Sign in"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
