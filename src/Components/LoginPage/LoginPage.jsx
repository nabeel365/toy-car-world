import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <form className="mt-8">
          <div>
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
          <div className="mt-6">
            <button
              type="submit"
              className="py-2 px-4 bg-black hover:bg-red-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm font-medium"
            >
              Login
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <span className="text-sm text-gray-600">Don't have an account?</span>
            <Link
            to="/register"
              className="ml-2 text-sm font-medium text-red-500 hover:text-black"
            >
              Register here
            </Link>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="py-2 px-4 bg-red-500 hover:bg-black focus:ring-red-500 focus:ring-offset-red-200 text-white w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm font-medium"
            >
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
