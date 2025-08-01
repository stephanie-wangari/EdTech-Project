import React from "react";

const Navbar = () => {
  return (
      <div className=" flex items-center justify-between px-28 py-5">
        
        {/* Left: Logo */}
        <div className="text-xl font-bold">
          <span className="text-blue-600">Edu</span>
          <span className="text-yellow-500">N</span>
          <span className="text-yellow-500">O</span>
          <span className="text-yellow-500">V</span>
          <span className="text-yellow-500">A.</span>
        </div>

        {/* Center: Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-sm font-semibold">
          <a href="#" className="text-blue-600 underline">Home</a>
          <a href="#" className="text-black hover:text-blue-600">About Us</a>
          <a href="#" className="text-black hover:text-blue-600">Courses</a>
          <a href="#" className="text-black hover:text-blue-600">Contact</a>
          <a href="#" className="text-black hover:text-blue-600">Blog</a>
        </div>

        {/* Right: Sign in Button */}
        <div className="whitespace-nowrap">
          <button className="bg-gradient-to-r from-blue-800 to-blue-500 text-white font-semibold px-6 py-2 rounded-full">
            Sign in
          </button>
        </div>
      </div>
  );
};

export default Navbar;
