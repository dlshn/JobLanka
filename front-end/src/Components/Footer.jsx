// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-yellow-400 py-12 mt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Side: Brand Info */}
          <div className="text-center md:text-left space-y-4">
            <div className="group">
              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-400 transition-all duration-300">
                JobLanka
              </h1>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-transparent mt-2 mx-auto md:mx-0"></div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Find your dream job in Sri Lanka with the most trusted job portal
            </p>
            <p className="text-xs text-gray-400 font-light">
              © {new Date().getFullYear()} JobLanka. All rights reserved.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 transform text-sm font-medium border-l-2 border-transparent hover:border-yellow-400 pl-3"
              >
                Home
              </Link>
              <Link 
                to="/" 
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 transform text-sm font-medium border-l-2 border-transparent hover:border-yellow-400 pl-3"
              >
                Jobs
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 transform text-sm font-medium border-l-2 border-transparent hover:border-yellow-400 pl-3"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 transform text-sm font-medium border-l-2 border-transparent hover:border-yellow-400 pl-3"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Right Side: Contact Info */}
          <div className="text-center md:text-right space-y-4">
            <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end space-x-3 group">
                <div className="w-8 h-8 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <p className="text-sm font-medium text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                  070 5570433
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-3 group">
                <div className="w-8 h-8 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider and Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <p className="text-xs text-gray-400">
                Connecting talent with opportunity
              </p>
            </div>
            <div className="text-xs text-gray-500">
              Built with ❤️ in Sri Lanka
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;