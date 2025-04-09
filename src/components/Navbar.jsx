import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-black sticky top-0 z-50">
      <div id='Home' className="flex items-center justify-between px-6 md:px-12 py-4 relative">
        
        {/* Logo (Left) */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain mr-4" />
          <span className="text-white text-xl font-semibold">FinTech Learning</span>
        </div>

        {/* Links (Center) */}
        <div className="absolute left-1/2 -translate-x-1/2 transform flex space-x-12 transition-all duration-300 ease-in-out">
          <a href="#Home" className="text-cyan-400">Home</a>
          <a href="#Reels" className="text-white hover:text-cyan-400 transition-colors duration-300">Reels</a>
          <a href="#Quiz" className="text-white hover:text-cyan-400 transition-colors duration-300">Quiz</a>
          <a href="#FinTip" className="text-white hover:text-cyan-400 transition-colors duration-300">FinTip</a>
        </div>

        {/* Empty space (Right side) - future buttons here */}
        <div></div>

      </div>
    </nav>
  );
};

export default Navbar;
