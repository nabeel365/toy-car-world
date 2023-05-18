import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navigation = () => {

  const {user, userLogOut} = useContext(AuthContext)
 
  const handleUserLogOut = () => {
    userLogOut()
            
  }


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img  src="https://media.istockphoto.com/id/1154404179/it/vettoriale/icona-del-volante-e-design-piatto-dellombra.jpg?s=612x612&w=0&k=20&c=dXvOtLEXCAxiszd8lSG_iJlV4voC_IiIhd9UHG4dtpg=" alt="Website Logo" className="w-8 h-8 mr-2 w-20 rounded-full" />
            <span className="text-red-500 font-bold text-lg">ToyCarWorld</span>
          </div>
          <div className="flex">
            <div className="hidden sm:block">
              <a href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <Link to="/toys" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">All Toys</Link>
              <Link to="/mytoys" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">My Toys</Link>
              <Link to="/addtoy" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Add A Toy</Link>
              <Link to="/blogs" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
            <Link className='text-white' to="login">Login </Link>
        

          <button className='text-white' onClick={handleUserLogOut}>LogOut</button>
            </div>
            <div className="ml-4">
              <img src="/profile.jpg" alt="User Profile" className="w-8 h-8 rounded-full" />
            </div>
          </div>
          <div className="sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'}`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                />
                <path
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'}`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 4H18V6H6V4ZM6 9H18V11H6V9ZM6 14H18V16H6V14ZM6 19H18V21H6V19Z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <a href="/" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/toys" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">All Toys</a>
            <a href="/mytoys" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">My Toys</a>
            <a href="/addtoy" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Add A Toy</a>

            <a href="/blogs" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Blogs</a>
            
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
