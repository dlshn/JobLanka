// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 py-6 mt-10 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-center md:text-left md:px-8">
        
        {/* Left Side: Brand Info */}
        <div>
          <h1 className="text-lg font-bold">JobLanka</h1>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 text-md font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/jobs" className="hover:underline">Jobs</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        
        {/* Right Side: Note */}
        <div className="md:gap-6 sm: flex flex-col items-center md:items-start">
        <hr className="border-t border-yellow-400 w-full mb-2 mt-0 block md:hidden" />
          <p className="text-sm font-sm">070 5570433</p>
          <p>Colombo, Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
