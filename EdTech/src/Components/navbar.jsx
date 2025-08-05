import React from "react";

const Navbar = () => {
  return (
      <div className=" flex items-center justify-between sm:px-28 px-10 md: py-5">
        
        {/* Left: Logo */}
        <div className="text-xl font-bold">
          <span className="text-blue-600">Edu</span>
          <span className="text-yellow-500">N</span>
          <span className="text-yellow-500">O</span>
          <span className="text-yellow-500">V</span>
          <span className="text-yellow-500">A.</span>
        </div>

        {/* Center: Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2 sm:flex hidden space-x-8 text-sm font-semibold">
          <a href="#" className="text-blue-600 underline">Home</a>
          <a href="#" className="text-black hover:text-blue-600">About Us</a>
          <a href="#" className="text-black hover:text-blue-600">Courses</a>
          <a href="#" className="text-black hover:text-blue-600">Contact</a>
          <a href="#" className="text-black hover:text-blue-600">Blog</a>
        </div>

        {/* Right: Sign in Button */}
        <div className="sm:flex hidden ">
          <button 
            className="text-white font-semibold px-6 py-2 rounded-full"
            style={{ background: 'linear-gradient(90deg, #2769C0, #0F1A4F)' }}>
              Sign in
            </button>  
        </div>

        {/* --- menu -- */}
        <div className="flex sm:hidden md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

        </div>
      </div>
  );
};

export default Navbar;
