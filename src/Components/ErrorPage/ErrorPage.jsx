import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            
            <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto text-center">
        <img
          src="https://previews.123rf.com/images/sodis/sodis1801/sodis180100083/93873938-error-404-page-broken-car-flat-vector-illustration-in-cartoon-style.jpg"
          alt="404 Error"
          className="mb-8 w-48 mx-auto"
        />
        <h1 className="text-4xl font-bold mb-4 text-red-500">Oops! Page Not Found</h1>
        <p className="text-black mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>

        </div>
    );
};

export default ErrorPage;