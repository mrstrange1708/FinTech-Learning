import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div id='Home' className="flex items-center justify-between px-6 md:px-12 py-4 relative">
        

        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-30 w-auto object-contain mr-4" />
          <span className="text-white text-2xl font-semibold">FinTech Learning</span>
        </div>


        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 transform space-x-12 transition-all duration-300 ease-in-out">
          <a href="#Home" className="text-cyan-400">Home</a>
          <a href="#Reels" className="text-white hover:text-cyan-400 transition-colors duration-300">Videos</a>
          <a href="#Quiz" className="text-white hover:text-cyan-400 transition-colors duration-300">Brain Battle</a>
          <a href="#FinTip" className="text-white hover:text-cyan-400 transition-colors duration-300">Learnings</a>
        </div>

        <div className="flex items-center space-x-4">

          <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white placeholder-gray-400 text-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </div>

          <div className="relative hidden md:block">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="hover:bg-gray-800 p-1 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4
                         v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg py-2 z-50">
                <a href="#profile" className="block px-4 py-2 text-white hover:bg-gray-700">Profile</a>
                <a href="#logout" className="block px-4 py-2 text-white hover:bg-gray-700">Logout</a>
              </div>
            )}
          </div>


          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-black flex flex-col items-center space-y-4 py-4">
          <a href="#Home" className="text-cyan-400">Home</a>
          <a href="#Reels" className="text-white hover:text-cyan-400 transition-colors duration-300">Videos</a>
          <a href="#Quiz" className="text-white hover:text-cyan-400 transition-colors duration-300">Brian Battle</a>
          <a href="#FinTip" className="text-white hover:text-cyan-400 transition-colors duration-300">Learnings</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
