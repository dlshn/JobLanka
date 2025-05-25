// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-yellow-400 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          JobLanka
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 font-bold">
          <Link to="/" className="hover:underline ">Home</Link>
          <Link to="/jobs" className="hover:underline">Jobs</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Login / Signup */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-black text-yellow-400 px-4 py-1 rounded hover:bg-gray-800">
            Login
          </Link>
        </div>

        {/* Mobile Menu Placeholder (optional) */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none" onClick={()=> setIsOpen(!isOpen)}>☰</button>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-yellow-400 shadow-lg z-50 border-t border-black/10">
            <div className="flex flex-col items-center space-y-4 p-4 font-bold">
              <Link 
                to="/" 
                className="hover:underline hover:text-gray-800 transition-colors duration-200" 
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/jobs" 
                className="hover:underline hover:text-gray-800 transition-colors duration-200" 
                onClick={() => setIsOpen(false)}
              >
                Jobs
              </Link>
              <Link 
                to="/about" 
                className="hover:underline hover:text-gray-800 transition-colors duration-200" 
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="hover:underline hover:text-gray-800 transition-colors duration-200" 
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <hr className="border-t border-black/20 w-full" />
              <Link 
                to="/login" 
                className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800 transition-all duration-200 hover:shadow-md" 
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
