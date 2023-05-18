import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Registration</h2>
        <form className="mt-8">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="photoURL" className="text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Enter your photo URL"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="py-2 px-4 bg-red-500 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm font-medium"
            >
              Register
            </button>
          </div>
          <br />

          <p>Already a user? Please <Link className='ml-2 text-sm font-medium text-red-500 hover:text-black' to="/login">Login</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
