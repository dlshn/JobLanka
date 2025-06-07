import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin } = React.useContext(AuthContext); // ✅ Use context

  return (
    <nav className="bg-yellow-400 text-black shadow-md md:px-4">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex gap-2 items-center">
          <img src={logo} alt="JobLanka Logo" className="h-10 w-auto rounded-full" />
          JobLanka
        </Link>

        <div className="hidden md:flex space-x-6 font-bold">
          
          <Link to="/" className="hover:underline">Home</Link>
          {!isAdmin &&(
            <Link to="/about" className="hover:underline">About</Link>
          )}
          {!isAdmin &&(
            <Link to="/contact" className="hover:underline">Contact</Link>
          )}
          {isAdmin && (
            <Link to="/addjob" className="text-red-700 font-semibold hover:underline">
              Create Job
            </Link>
          )}
        </div>

        {!isAdmin &&(
          <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-black text-yellow-400 px-4 py-1 rounded hover:bg-gray-800">
            Admin Login
          </Link>
        </div>
        )}

        <div className="md:hidden">
          <button className="text-black focus:outline-none" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-yellow-400 shadow-lg z-50 border-t border-black/10">
            <div className="flex flex-col items-center space-y-4 p-4 font-bold">
              

                <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</Link>
              {!isAdmin &&(
                <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</Link>
              )}    
              {!isAdmin && (   
                <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact</Link>
              )}
              {isAdmin && (
                <Link to="/addjob" onClick={() => setIsOpen(false)} className="text-red-700 font-semibold hover:underline">
                  Create Job
                </Link>
              )}
              <hr className="border-t border-black/20 w-full" />
              {!isAdmin && (
                <Link to="/login" onClick={() => setIsOpen(false)} className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800">
                Admin Login
              </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
